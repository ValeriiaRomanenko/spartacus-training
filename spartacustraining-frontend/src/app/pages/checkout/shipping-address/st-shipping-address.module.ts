import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@spartacus/core';
import {AddressFormModule, CardModule, FormErrorsModule, SpinnerModule} from '@spartacus/storefront';
import { StCheckoutShippingAddressComponent } from './containers';
import { StAddressFormComponent } from './containers/st-address-form/st-address-form.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    StCheckoutShippingAddressComponent,
    StAddressFormComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    AddressFormModule,
    SpinnerModule,
    CardModule,
    NgSelectModule,
    FormErrorsModule,
    ReactiveFormsModule
  ]
})
export class StShippingAddressModule { }
