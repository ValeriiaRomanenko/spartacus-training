import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {I18nModule, UrlModule} from "@spartacus/core";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CardModule, CartSharedModule, IconModule, PromotionsModule} from "@spartacus/storefront";
import { StReviewOrderComponent } from './containers';

@NgModule({
  declarations: [
    StReviewOrderComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    UrlModule,
    RouterModule,
    ReactiveFormsModule,
    PromotionsModule,
    CartSharedModule,
    IconModule,
    CardModule
  ]
})
export class StReviewOrderModule { }
