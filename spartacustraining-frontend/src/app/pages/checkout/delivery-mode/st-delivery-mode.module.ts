import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { I18nModule} from '@spartacus/core';
import { SpinnerModule } from '@spartacus/storefront';

import { StCheckoutDeliveryModeComponent } from './containers';

@NgModule({
  declarations: [
    StCheckoutDeliveryModeComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    ReactiveFormsModule,
    SpinnerModule
  ]
})
export class StDeliveryModeModule { }
