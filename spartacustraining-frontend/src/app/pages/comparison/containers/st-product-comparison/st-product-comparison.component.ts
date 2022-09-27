import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalMessageService, GlobalMessageType, ImageGroup, OccConfig, Product } from '@spartacus/core';
import { Observable } from 'rxjs';

import { ComparisonProducts } from '../../models';
import { ComparisonProductService } from '../../services';

@Component({
  selector: 'st-product-comparison',
  templateUrl: './st-product-comparison.component.html',
  styleUrls: ['./st-product-comparison.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StProductComparisonComponent {

  comparisonProducts$: Observable<ComparisonProducts> = this._comparisonProductsService.get();
  baseUrl = this._config?.backend?.occ?.baseUrl;

  constructor(
    private _config: OccConfig,
    private _changeDetectorRef: ChangeDetectorRef,
    private _comparisonProductsService: ComparisonProductService,
    private _globalMessageService: GlobalMessageService,
    private _router: Router
  ) { }

  containsClassification(product: Product, code: string = ''): boolean {
    let isExist = false;
    if (product.classifications) {
      product.classifications.forEach(element => {
        if (element.code === code) {
          isExist = true;
          return;
        }
      });
    }
    return isExist;
  }

  deleteFromComparison(code: string): void {
    this._comparisonProductsService.deleteProduct(code);
    this.comparisonProducts$ = this._comparisonProductsService.get();
    this._changeDetectorRef.detectChanges();
    this._globalMessageService.add(
      'Product removed from comparison',
      GlobalMessageType.MSG_TYPE_INFO
    );
  }

  getImage(product: Product): string {
    return (product.images?.[0] as ImageGroup)?.url as string;
  }

  navigateToProduct(product: Product): void {
    this._router.navigate([product.url]);
  }
}
