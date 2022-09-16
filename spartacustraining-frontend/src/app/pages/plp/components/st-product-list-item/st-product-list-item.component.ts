import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {ProductListItemContext, ProductListItemContextSource, ProductListOutlets} from '@spartacus/storefront';
import {BaseOption} from "@spartacus/core";

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
  ],
  encapsulation: ViewEncapsulation.None,
})
export class StProductListItemComponent implements OnInit, OnChanges {

  readonly ProductListOutlets = ProductListOutlets;
  @Input() product: any;

  variants: BaseOption;

  constructor(private _productListItemContextSource: ProductListItemContextSource) { }

  ngOnChanges(changes?: SimpleChanges): void {
    console.log(changes);
    if (changes?.product) {
      this._productListItemContextSource.product$.next(this.product);
    }
  }

  ngOnInit() {
    this.variants = { options: this.product.variantOptions }
  }
}
