import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  ActiveFacetsModule,
  AddToCartModule, FacetListModule,
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
import { StRefinementFacetComponent } from './containers/st-refinement-facet/st-refinement-facet.component';

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
    FacetListModule
  ]
})
export class StPlpModule { }
