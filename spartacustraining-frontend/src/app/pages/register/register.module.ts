import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import { FormErrorsModule, SpinnerModule } from '@spartacus/storefront';

import { StRegisterCustomerComponent } from './st-register-customer/st-register-customer.component';

@NgModule({
  declarations: [
    StRegisterCustomerComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    UrlModule,
    SpinnerModule,
    FormErrorsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class RegisterModule { }
