import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@spartacus/core';
import {CardModule, FormErrorsModule, IconModule, SpinnerModule} from '@spartacus/storefront';

import { StPaymentDetailsComponent } from './containers';
import { StPaymentFormComponent } from './components';
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  declarations: [
    StPaymentDetailsComponent,
    StPaymentFormComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    CardModule,
    SpinnerModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormErrorsModule,
    IconModule
  ]
})
export class StPaymentDetailsModule { }
