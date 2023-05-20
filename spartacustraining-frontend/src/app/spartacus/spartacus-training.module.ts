import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from '../pages';
import { SharedModule } from "../shared/shared.module";
import { LayoutModule } from "../layout/layout.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RegisterModule,
    LayoutModule
  ]
})
export class SpartacusTrainingModule { }
