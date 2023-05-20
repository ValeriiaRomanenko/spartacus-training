import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import {
  GenericLinkModule,
  GlobalMessageComponentModule,
  MediaModule,
  OutletRefModule,
  PageComponentModule,
  PageLayoutModule,
  PageSlotModule
} from "@spartacus/storefront";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "./shared/shared.module";
import { StCartModule } from "./pages";
import { UrlModule } from "@spartacus/core";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        OutletRefModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        SpartacusModule,
        PageComponentModule,
        PageSlotModule,
        NgbModule,
        PageLayoutModule,
        GlobalMessageComponentModule,
        MediaModule,
        GenericLinkModule,
        SharedModule,
        StCartModule,
        UrlModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
