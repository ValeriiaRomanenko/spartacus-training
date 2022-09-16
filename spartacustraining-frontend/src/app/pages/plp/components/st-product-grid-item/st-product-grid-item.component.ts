import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {ProductListItemContext, ProductListItemContextSource, ProductListOutlets} from '@spartacus/storefront';
import {
  BaseOption,
  isNotUndefined,
  ProductScope,
  ProductService,
  VariantOptionQualifier,
  VariantQualifier
} from "@spartacus/core";
import {filter, take} from "rxjs/operators";

// import { ActiveCartFacade } from '@spartacus/cart';

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
  ],
  encapsulation: ViewEncapsulation.None,
})
export class StProductGridItemComponent implements OnInit, OnChanges {

  readonly ProductListOutlets = ProductListOutlets;

  variants: BaseOption;

  @Input() product: any;

  constructor(
    private _productListItemContextSource: ProductListItemContextSource,
    private productService: ProductService,
    // protected activeCartService: ActiveCartFacade,
  ) { }

  ngOnChanges(changes?: SimpleChanges): void {
    if (changes?.product) {
      this._productListItemContextSource.product$.next(this.product);
    }
  }

  ngOnInit() {
    this.variants = { options: this.product.variantOptions }
  }

  getVariantOptionValue(qualifiers: VariantOptionQualifier[]) {
    const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.SIZE);
    return obj ? obj.value : '';
  }

  addToCart(code: string, quantity: number = 1): null {
    if (code) {
      this.productService.get(code, ProductScope.LIST)
        .pipe(
          filter(isNotUndefined),
          take(1),
          // switchMap(() => this.activeCartService.getEntries()),
          //   take(1),
          //   tap((cartEntries) => {
              // this.activeCartService.addEntry(
              //   this.productCode,
              //   quantity,
              //   this.pickupStore
              // );
              //
              //
              // this.eventService.dispatch(
              //   this.createCartUiEventAddToCart(
              //     this.productCode,
              //     quantity,
              //     cartEntries.length,
              //     this.pickupStore
              //   )
              // );
            // })

        ).subscribe();
    }
    return null;
  }
}
