import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RegisterModule,
  StCartModule,
  StCheckoutModule,
  StComparisonModule,
  StOrderSummaryModule,
  StPlpModule
} from '../pages';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RegisterModule,
    LayoutModule,
    RegisterModule,
    SharedModule,
    LayoutModule,
    StCartModule,
    StOrderSummaryModule,
    StPlpModule,
    StComparisonModule,
    StCheckoutModule
  ]
})
export class SpartacusTrainingModule { }
