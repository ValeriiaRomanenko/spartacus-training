import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';

import { ComparisonProductService } from './services';
import { StProductComparisonComponent } from './containers';
import { StAddToComparisonComponent } from './components';

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
    })
  ],
  providers: [
    {
      provide: ComparisonProductService
    }
  ]
})
export class StComparisonModule { }
