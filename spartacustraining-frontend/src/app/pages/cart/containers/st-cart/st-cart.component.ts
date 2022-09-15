import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  ActiveCartService,
  AuthService,
  Cart,
  OrderEntry,
  PromotionLocation,
  RoutingService,
  SelectiveCartService
} from '@spartacus/core';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'st-cart',
  templateUrl: './st-cart.component.html',
  styleUrls: ['./st-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StCartComponent implements OnInit {

  cart$: Observable<Cart> = this._activeCartService.getActive();
  entries$: Observable<OrderEntry[]> = this._activeCartService
    .getEntries()
    .pipe(filter((entries) => entries.length > 0));
  loggedIn = false;
  promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;
  selectiveCartEnabled: boolean = this._selectiveCartService.isEnabled();
  cartLoaded$: Observable<boolean> = combineLatest([
    this._activeCartService.isStable(),
    this.selectiveCartEnabled
      ? this._selectiveCartService.isStable()
      : of(false),
    this._authService.isUserLoggedIn(),
  ]).pipe(
    tap(([, , loggedIn]) => (this.loggedIn = loggedIn)),
    map(([cartLoaded, sflLoaded, loggedIn]) =>
      loggedIn && this.selectiveCartEnabled
        ? cartLoaded && sflLoaded
        : cartLoaded
    )
  );

  constructor(
    private _activeCartService: ActiveCartService,
    private _selectiveCartService: SelectiveCartService,
    private _authService: AuthService,
    private _routingService: RoutingService
  ) { }

  ngOnInit(): void { }

  saveForLater(item: OrderEntry) {
    if (this.loggedIn) {
      if (item.product?.code && item.quantity) {
        this._activeCartService.removeEntry(item);
        this._selectiveCartService.addEntry(item.product?.code, item.quantity);
      }
    } else {
      this._routingService.go({ cxRoute: 'login' });
    }
  }
}
