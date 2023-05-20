import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartItemContext, CartItemContextSource } from '@spartacus/storefront';
import { OrderEntry, PromotionLocation } from '@spartacus/core';
import { CartOutlets } from '@spartacus/storefront';
import {PromotionResult} from "@spartacus/core/src/model/cart.model";
import {StIconTypes} from "../../../../shared/st-icon.types";

export interface CartItemComponentOptions {
  isSaveForLater?: boolean;
  optionalBtn?: any;
}

@Component({
  selector: 'st-cart-item',
  templateUrl: './st-cart-item.component.html',
  styleUrls: ['./st-cart-item.component.scss'],
  providers: [
    CartItemContextSource,
    { provide: CartItemContext, useExisting: CartItemContextSource },
  ]
})
export class StCartItemComponent implements OnChanges {

  @Input() compact = false;
  @Input() item: OrderEntry | undefined;
  @Input() readonly = false;
  @Input() quantityControl: FormControl | undefined;
  @Input() promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;
  @Input() options: CartItemComponentOptions = {
    isSaveForLater: false,
    optionalBtn: null,
  };

  readonly CartOutlets = CartOutlets;

  iconTypes = StIconTypes;

  constructor(private _cartItemContextSource: CartItemContextSource) { }

  ngOnChanges(changes?: SimpleChanges): void {
    console.log(changes);
    if (changes?.compact) {
      this._cartItemContextSource.compact$.next(this.compact);
    }
    if (changes?.readonly) {
      this._cartItemContextSource.readonly$.next(this.readonly);
    }
    if (changes?.item) {
      this._cartItemContextSource.item$.next(this.item);
    }
    if (changes?.quantityControl) {
      this._cartItemContextSource.quantityControl$.next(this.quantityControl);
    }
    if (changes?.promotionLocation) {
      this._cartItemContextSource.location$.next(this.promotionLocation);
    }
    if (changes?.options) {
      this._cartItemContextSource.options$.next(this.options);
    }
  }

  isProductOutOfStock(product: any): any {
    return (
      product &&
      product.stock &&
      product.stock.stockLevelStatus === 'outOfStock'
    );
  }

  removeItem(): void {
    if (this.quantityControl) {
      this.quantityControl.setValue(0);
      this.quantityControl.markAsDirty();
    }
  }

  // isReadonly(): boolean {}

  getPromotions(item: OrderEntry | undefined): PromotionResult[] {
    return item?.promotions !== undefined ? item?.promotions : [];
  }

  getMax(item: OrderEntry | undefined): number {
    return item !== undefined ? item?.product?.stock?.stockLevel as number : 0;
  }
}
