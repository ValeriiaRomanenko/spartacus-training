import { NgModule } from '@angular/core';
import { provideConfig } from "@spartacus/core";
import { LayoutConfig } from "@spartacus/storefront";
@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(<LayoutConfig>{
      layoutSlots: {
        header: {
          lg: {
            slots: [
              'SearchBox',
              'SiteLogo',
              'SiteLogin',
              'MiniCart',
              'NavigationBar',
            ],
          },
          slots: [ 'SearchBox', 'SiteLogo', 'MiniCart' ],
        },
      }
    })
  ]
})
export class LayoutModule { }
