import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActiveCartService, Cart, OrderEntry } from '@spartacus/core';
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'st-order-summary',
  templateUrl: './st-order-summary.component.html',
  styleUrls: ['./st-order-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StOrderSummaryComponent implements OnInit, OnDestroy {

  cart$: Observable<Cart> | undefined;
  entries$: Observable<OrderEntry[]> | undefined;
  cartValidationInProgress = false;

  private _subscription = new Subscription();

  constructor(
    protected activeCartService: ActiveCartService,
    protected router?: Router
  ) {}

  ngOnInit() {
    this.cart$ = this.activeCartService.getActive();
    this.entries$ = this.activeCartService
      .getEntries()
      .pipe(filter((entries) => entries.length > 0));

    // @ts-ignore
    this._subscription.add(
      this.router?.events.subscribe((event: any) => {
        if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.cartValidationInProgress = false;
        }
      })
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  disableButtonWhileNavigation(): void {
    this.cartValidationInProgress = true;
  }
}
