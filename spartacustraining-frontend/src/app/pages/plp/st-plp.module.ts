import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  ActiveFacetsModule,
  AddToCartModule,
  AddToWishListModule,
  FacetListModule,
  IconModule,
  ListNavigationModule,
  MediaModule,
  OutletModule, ProductListModule,
  SpinnerModule,
  StarRatingModule
} from '@spartacus/storefront';
import { I18nModule, UrlModule } from '@spartacus/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { StProductListComponent } from './containers';
import {
  StProductGridItemComponent,
  StProductListItemComponent,
  StProductScrollComponent
} from './components';
import { StRefinementFacetComponent } from './containers';
import { SharedModule } from "../../shared/shared.module";
import { ProductVariantSizeSelectorModule, ProductVariantStyleSelectorModule } from "@spartacus/product/variants/components";
import { CartQuickOrderFormModule } from "@spartacus/cart/quick-order/components";

@NgModule({
  declarations: [
    StProductListComponent,
    StProductGridItemComponent,
    StProductListItemComponent,
    StProductScrollComponent,
    StRefinementFacetComponent
  ],
    imports: [
        CommonModule,
        ListNavigationModule,
        I18nModule,
        AddToCartModule,
        OutletModule,
        StarRatingModule,
        RouterModule,
        UrlModule,
        MediaModule,
        IconModule,
        SpinnerModule,
        InfiniteScrollModule,
        ProductListModule,
        ActiveFacetsModule,
        FacetListModule,
        SharedModule,
        AddToWishListModule,
        ProductVariantStyleSelectorModule,
        ProductVariantSizeSelectorModule,
        CartQuickOrderFormModule
    ]
})
export class StPlpModule { }
