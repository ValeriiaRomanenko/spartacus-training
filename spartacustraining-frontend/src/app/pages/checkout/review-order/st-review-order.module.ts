import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {I18nModule, UrlModule} from "@spartacus/core";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CardModule, CartSharedModule, IconModule, PromotionsModule} from "@spartacus/storefront";
import { StReviewOrderComponent } from './containers';
import {StCartModule} from "../../cart/st-cart.module";

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
        CardModule,
        StCartModule
    ]
})
export class StReviewOrderModule { }
