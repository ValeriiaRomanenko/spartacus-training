import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, Product, ProductService, RoutingService } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { ComparisonProductService } from '../../services';

@Component({
  selector: 'st-add-to-comparison',
  templateUrl: './st-add-to-comparison.component.html',
  styleUrls: ['./st-add-to-comparison.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StAddToComparisonComponent implements OnInit, OnDestroy {

  private _productCodeSub$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  productCode$: Observable<string> = this._productCodeSub$.asObservable();

  constructor(
    private _routingService: RoutingService,
    private _productService: ProductService,
    private _comparisonProductsService: ComparisonProductService,
    private _globalMessageService: GlobalMessageService
  ) { }

  ngOnInit() {
    this._getProduct()
      .pipe(filter(Boolean))
      .subscribe((product: Product) => {
        this._productCodeSub$.next(product.code);
      });
  }

  addToComparison() {
    this.productCode$
      .pipe(
        take(1)
      )
      .subscribe(productCode => {
        this._comparisonProductsService.addProduct(productCode);
        this._globalMessageService.add(
          'Product added to comparison',
          GlobalMessageType.MSG_TYPE_CONFIRMATION
        );
      });
  }

  private _getProduct(): Observable<Product> {
    return this._routingService.getRouterState().pipe(
      map(state => state.state.params['productCode']),
      filter(Boolean),
      switchMap((productCode: any) =>
        this._productService.get(productCode)
      )
    );
  }

  ngOnDestroy(): void {
    if (this._productCodeSub$) {
      this._productCodeSub$.unsubscribe();
    }
  }
}
