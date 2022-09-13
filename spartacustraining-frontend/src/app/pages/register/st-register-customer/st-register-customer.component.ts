import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AnonymousConsent,
  AnonymousConsentsConfig,
  AnonymousConsentsService,
  AuthConfigService,
  ConsentTemplate,
  GlobalMessageEntities,
  GlobalMessageService,
  GlobalMessageType,
  OAuthFlow,
  RoutingService,
  Title
} from '@spartacus/core';
import { CustomFormValidators, sortTitles } from '@spartacus/storefront';
import { UserRegisterFacade, UserSignUp } from '@spartacus/user/profile/root';
import { BehaviorSubject, combineLatest, Observable, of, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'st-register-customer',
  templateUrl: './st-register-customer.component.html',
  styleUrls: ['./st-register-customer.component.scss']
})
export class StRegisterCustomerComponent implements OnInit, OnDestroy {

  private _subscription = new Subscription();

  titles$: Observable<Title[]> = of([]);
  isLoading$ = new BehaviorSubject(false);
  anonymousConsent$: Observable<{
    consent: AnonymousConsent;
    template: string;
  }> = of();

  registerForm: FormGroup = this._fb.group(
    {
      titleCode: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, CustomFormValidators.emailValidator]],
      password: ['', [Validators.required, CustomFormValidators.passwordValidator]],
      passwordconf: ['', Validators.required],
      newsletter: new FormControl({
        value: false,
        disabled: this._isConsentRequired(),
      }),
      termsandconditions: [false, Validators.requiredTrue],
    },
    {
      validators: CustomFormValidators.passwordsMustMatch(
        'password',
        'passwordconf'
      ),
    }
  );

  constructor(
    private _fb: FormBuilder,
    private _userRegisterFacade: UserRegisterFacade,
    private _globalMessageService: GlobalMessageService,
    private _routingService: RoutingService,
    private _anonymousConsentsService: AnonymousConsentsService,
    private _anonymousConsentsConfig: AnonymousConsentsConfig,
    private _authConfigService: AuthConfigService
  ) { }

  ngOnInit() {
    this.titles$ = this._userRegisterFacade.getTitles().pipe(
      map((titles: Title[]) => {
        return titles.sort(sortTitles);
      })
    );

    this._subscription.add(
      this._globalMessageService
        .get()
        .pipe(filter((messages) => !!Object.keys(messages).length))
        .subscribe((globalMessageEntities: GlobalMessageEntities) => {
          const messages =
            globalMessageEntities &&
            globalMessageEntities[GlobalMessageType.MSG_TYPE_ERROR];
          if (
            messages &&
            messages.some((message) => message === 'This field is required.')
          ) {
            this._globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
            this._globalMessageService.add(
              { key: 'register.titleRequired' },
              GlobalMessageType.MSG_TYPE_ERROR
            );
          }
        })
    );

    const registerConsent = this._anonymousConsentsConfig?.anonymousConsents?.registerConsent ?? '';

    this.anonymousConsent$ = combineLatest([
      this._anonymousConsentsService.getConsent(registerConsent),
      this._anonymousConsentsService.getTemplate(registerConsent),
    ]).pipe(
      map(([consent, template]: [AnonymousConsent, ConsentTemplate]) => {
        return {
          consent,
          template: template?.description ? template.description : '',
        };
      })
    );

    this._subscription.add(
      this.registerForm.get('newsletter')!.valueChanges.subscribe(() => {
        this.toggleAnonymousConsent();
      })
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  submitForm(): void {
    if (this.registerForm.valid) {
      this.registerUser();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  registerUser(): void {
    this.isLoading$.next(true);
    this._userRegisterFacade
      .register(this.collectDataFromRegisterForm(this.registerForm.value))
      .subscribe({
        next: () => this._onRegisterUserSuccess(),
        complete: () => this.isLoading$.next(false),
      });
  }

  titleSelected(title: Title): void {
    this.registerForm['controls'].titleCode.setValue(title.code);
  }

  collectDataFromRegisterForm(formData: any): UserSignUp {
    const { firstName, lastName, email, password, titleCode } = formData;
    return {
      firstName,
      lastName,
      uid: email.toLowerCase(),
      password,
      titleCode,
    };
  }

  isConsentGiven(consent: AnonymousConsent): boolean {
    return this._anonymousConsentsService.isConsentGiven(consent);
  }

  toggleAnonymousConsent(): void {
    const registerConsent =
      this._anonymousConsentsConfig?.anonymousConsents?.registerConsent;

    if (registerConsent) {
      if (Boolean(this.registerForm.get('newsletter')!.value)) {
        this._anonymousConsentsService.giveConsent(registerConsent);
      } else {
        this._anonymousConsentsService.withdrawConsent(registerConsent);
      }
    }
  }

  firstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }

  lastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }

  email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  passwordconf(): FormControl {
    return this.registerForm.get('passwordconf') as FormControl;
  }

  termsandconditions(): FormControl {
    return this.registerForm.get('termsandconditions') as FormControl;
  }

  private _isConsentRequired(): boolean {
    const requiredConsents = this._anonymousConsentsConfig?.anonymousConsents?.requiredConsents;
    const registerConsent = this._anonymousConsentsConfig?.anonymousConsents?.registerConsent;
    if (requiredConsents && registerConsent) {
      return requiredConsents.includes(registerConsent);
    }
    return false;
  }

  private _onRegisterUserSuccess(): void {
    if (this._authConfigService.getOAuthFlow() === OAuthFlow.ResourceOwnerPasswordFlow) {
      this._routingService.go('login');
    }
    this._globalMessageService.add(
      { key: 'register.postRegisterMessage' },
      GlobalMessageType.MSG_TYPE_CONFIRMATION
    );
  }
}
