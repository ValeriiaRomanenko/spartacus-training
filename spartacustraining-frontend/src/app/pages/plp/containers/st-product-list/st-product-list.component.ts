import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ProductSearchPage} from '@spartacus/core';
import {PageLayoutService, ProductListComponentService, ViewConfig, ViewModes} from '@spartacus/storefront';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {take, tap} from 'rxjs/operators';

@Component({
  selector: 'st-product-list',
  templateUrl: './st-product-list.component.html',
  styleUrls: ['./st-product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StProductListComponent implements OnInit, OnDestroy {

  private _subscription = new Subscription();

  isInfiniteScroll: boolean = this.scrollConfig.view?.infiniteScroll?.active;
  model$: Observable<ProductSearchPage> = this.productListComponentService.model$.pipe(
    tap(d => console.log(d))
  );
  viewMode$ = new BehaviorSubject<ViewModes>(ViewModes.Grid);
  ViewModes = ViewModes;

  constructor(
    private pageLayoutService: PageLayoutService,
    private productListComponentService: ProductListComponentService,
    public scrollConfig: ViewConfig
  ) { }

  ngOnInit(): void {
    this._subscription.add(
      this.pageLayoutService.templateName$
        .pipe(take(1))
        .subscribe((template) => {
          this.viewMode$.next(
            template === 'ProductGridPageTemplate'
              ? ViewModes.Grid
              : ViewModes.List
          );
        })
    );
  }

  sortList(sortCode: string): void {
    this.productListComponentService.sort(sortCode);
  }

  setViewMode(mode: any): void {
    this.viewMode$.next(mode);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
