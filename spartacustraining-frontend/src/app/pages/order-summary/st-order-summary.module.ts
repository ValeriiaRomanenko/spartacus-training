import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StOrderSummaryComponent } from './containers';
import {RouterModule} from "@angular/router";
import {FeaturesConfigModule, I18nModule, UrlModule} from "@spartacus/core";

@NgModule({
  declarations: [
    StOrderSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    I18nModule,
    FeaturesConfigModule
  ]
})
export class StOrderSummaryModule { }
