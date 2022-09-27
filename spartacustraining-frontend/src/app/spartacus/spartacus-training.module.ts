import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RegisterModule,
  StCartModule,
  StComparisonModule,
  StOrderSummaryModule,
  StPlpModule
} from '../pages';
import { SharedModule } from "../shared/shared.module";
import { LayoutModule } from "../layout/layout.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RegisterModule,
    LayoutModule,
    StCartModule,
    StOrderSummaryModule,
    StPlpModule,
    StComparisonModule
  ]
})
export class SpartacusTrainingModule { }
