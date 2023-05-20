import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { LayoutModule } from "../layout/layout.module";
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
    RegisterModule,
    SharedModule,
    LayoutModule,
    StCartModule,
    StOrderSummaryModule,
    StPlpModule
  ]
})
export class SpartacusTrainingModule { }
