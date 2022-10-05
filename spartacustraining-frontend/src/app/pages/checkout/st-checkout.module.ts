import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StShippingAddressModule } from './shipping-address/st-shipping-address.module';
import { StDeliveryModeModule } from './delivery-mode/st-delivery-mode.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StShippingAddressModule,
    StDeliveryModeModule
  ]
})
export class StCheckoutModule { }
