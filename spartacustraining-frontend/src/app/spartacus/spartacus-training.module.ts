import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RegisterModule,
  StCartModule,
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
    StPlpModule
  ]
})
export class SpartacusTrainingModule { }
