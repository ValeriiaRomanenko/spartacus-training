import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@spartacus/core';
import { AddressFormModule, CardModule, SpinnerModule } from '@spartacus/storefront';
import { StCheckoutShippingAddressComponent } from './containers';

@NgModule({
  declarations: [
    StCheckoutShippingAddressComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    AddressFormModule,
    SpinnerModule,
    CardModule
  ]
})
export class StShippingAddressModule { }
