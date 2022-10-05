import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StShippingAddressModule } from './shipping-address/st-shipping-address.module';
import { StDeliveryModeModule } from './delivery-mode/st-delivery-mode.module';
import { StPaymentDetailsModule } from './payment-details/st-payment-details.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StShippingAddressModule,
    StDeliveryModeModule,
    StPaymentDetailsModule
  ]
})
export class StCheckoutModule { }
