import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nTestingModule, UrlModule } from "@spartacus/core";
import { IconModule, MediaModule, PageSlotModule, SearchBoxModule } from "@spartacus/storefront";
import { StSearchBoxComponent } from "./st-search-box/st-search-box.component";
import { AppRoutingModule } from "../app-routing.module";
import { StLoginComponent } from './st-login/st-login.component';
import { StLinkComponent } from './st-link/st-link.component';
import { StMiniCartComponent } from './st-mini-cart/st-mini-cart.component';

@NgModule({
  declarations: [
    StSearchBoxComponent,
    StLoginComponent,
    StLinkComponent,
    StMiniCartComponent,
  ],
  imports: [
    CommonModule,
    I18nTestingModule,
    IconModule,
    SearchBoxModule,
    MediaModule,
    UrlModule,
    AppRoutingModule,
    PageSlotModule,
  ],
  exports: [
    StSearchBoxComponent,
    StLinkComponent,
  ]
})
export class SharedModule { }
