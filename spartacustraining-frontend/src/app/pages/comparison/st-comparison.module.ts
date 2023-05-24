import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, UrlModule } from '@spartacus/core';

import { ComparisonProductService } from './services';
import { StProductComparisonComponent } from './containers';
import { StAddToComparisonComponent } from './components';
import { PopoverModule, StarRatingModule } from "@spartacus/storefront";

@NgModule({
  declarations: [
    StProductComparisonComponent,
    StAddToComparisonComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        AddToComparisonComponent: {
          component: StAddToComparisonComponent
        },
        ProductComparisonComponent: {
          component: StProductComparisonComponent
        }
      }
    }),
    PopoverModule,
    UrlModule,
    StarRatingModule
  ],
  exports: [
    StAddToComparisonComponent
  ],
  providers: [
    {
      provide: ComparisonProductService
    }
  ]
})
export class StComparisonModule { }
