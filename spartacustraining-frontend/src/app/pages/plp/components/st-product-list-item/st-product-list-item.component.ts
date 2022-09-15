import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductListItemContext, ProductListItemContextSource, ProductListOutlets } from '@spartacus/storefront';

@Component({
  selector: 'st-product-list-item',
  templateUrl: './st-product-list-item.component.html',
  styleUrls: ['./st-product-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ProductListItemContextSource,
    {
      provide: ProductListItemContext,
      useExisting: ProductListItemContextSource,
    },
  ]
})
export class StProductListItemComponent implements OnChanges {

  readonly ProductListOutlets = ProductListOutlets;
  @Input() product: any;

  constructor(private _productListItemContextSource: ProductListItemContextSource) { }

  ngOnChanges(changes?: SimpleChanges): void {
    if (changes?.product) {
      this._productListItemContextSource.product$.next(this.product);
    }
  }
}
