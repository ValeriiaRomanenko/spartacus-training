import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RegisterModule,
  StCartModule,
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
    StCartModule,
    StOrderSummaryModule,
    StPlpModule
  ]
})
export class SpartacusTrainingModule { }
