import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule, StCartModule } from '../pages';
import { SharedModule } from "../shared/shared.module";
import { LayoutModule } from "../layout/layout.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterModule,
    SharedModule,
    RegisterModule,
    LayoutModule,
    RegisterModule,
    StCartModule
  ]
})
export class SpartacusTrainingModule { }
