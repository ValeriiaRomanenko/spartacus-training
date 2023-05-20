import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import { LoginModule, LoginRegisterModule } from "@spartacus/user/account/components";
import {
  FormErrorsModule,
  IconModule,
  KeyboardFocusTestingModule,
  LayoutModule,
  OutletModule,
  PageComponentModule,
  PageLayoutComponent,
  PageLayoutModule,
  PageSlotModule,
  SpinnerModule
} from '@spartacus/storefront';
import { StRegisterCustomerComponent } from "./st-register-customer/st-register-customer.component";
import { StRegisterModalComponent } from "./st-register-modal/st-register-modal.component";
import { StLoginFormComponent } from "./st-login-form/st-login-form.component";
import { LoginGuard } from "./login.guard";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    StRegisterCustomerComponent,
    StRegisterModalComponent,
    StLoginFormComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    UrlModule,
    SpinnerModule,
    FormErrorsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'login',
        canActivate: [LoginGuard],
        component: PageLayoutComponent,
        data: {cxRoute: 'login'},
      },
      {
        path: 'login/register',
        component: PageLayoutComponent,
        canActivate: [LoginGuard],
        data: {cxRoute: 'register'},
      },
    ]),
    SharedModule,
    PageSlotModule,
    LoginModule,
    LoginRegisterModule,
    PageLayoutModule,
    LayoutModule,
    IconModule,
    KeyboardFocusTestingModule,
    PageComponentModule,
    OutletModule,
  ],
  exports: [ RouterModule ]
})
export class RegisterModule { }
