import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import {
    AddToWishListModule,
    CartCouponModule,
    FormErrorsModule,
    ItemCounterModule,
    MediaModule,
    OutletModule,
    PromotionsModule,
    SpinnerModule
} from '@spartacus/storefront';

import { StCartComponent, StEmptyCartComponent } from './containers';
import { StCartItemsComponent, StCartItemComponent, StCartActionsComponent } from './components';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        StCartComponent,
        StEmptyCartComponent,
        StCartItemsComponent,
        StCartItemComponent,
        StCartActionsComponent
    ],
    exports: [
        StEmptyCartComponent
    ],
    imports: [
        CommonModule,
        I18nModule,
        UrlModule,
        SpinnerModule,
        FormErrorsModule,
        ReactiveFormsModule,
        RouterModule,
        PromotionsModule,
        OutletModule,
        ItemCounterModule,
        MediaModule,
        SharedModule,
        CartCouponModule,
        AddToWishListModule
    ]
})
export class StCartModule { }
