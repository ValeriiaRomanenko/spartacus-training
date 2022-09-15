import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductListItemContext, ProductListItemContextSource, ProductListOutlets } from '@spartacus/storefront';

@Component({
  selector: 'st-product-grid-item',
  templateUrl: './st-product-grid-item.component.html',
  styleUrls: ['./st-product-grid-item.component.scss'],
  providers: [
    ProductListItemContextSource,
    {
      provide: ProductListItemContext,
      useExisting: ProductListItemContextSource,
    },
  ]
})
export class StProductGridItemComponent implements OnChanges {

  readonly ProductListOutlets = ProductListOutlets;
  @Input() product: any;

  constructor(private _productListItemContextSource: ProductListItemContextSource) { }

  ngOnChanges(changes?: SimpleChanges): void {
    if (changes?.product) {
      this._productListItemContextSource.product$.next(this.product);
    }
  }
}
