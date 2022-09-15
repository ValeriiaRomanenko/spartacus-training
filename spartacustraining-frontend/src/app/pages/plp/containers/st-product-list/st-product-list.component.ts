import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {ProductSearchPage} from "@spartacus/core";
import {PageLayoutService, ProductListComponentService, ViewConfig, ViewModes} from '@spartacus/storefront';
import {take} from "rxjs/operators";

@Component({
  selector: 'app-st-product-list',
  templateUrl: './st-product-list.component.html',
  styleUrls: ['./st-product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StProductListComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();

  isInfiniteScroll: boolean;

  model$: Observable<ProductSearchPage> =
    this.productListComponentService.model$;

  viewMode$ = new BehaviorSubject<ViewModes>(ViewModes.Grid);
  ViewModes = ViewModes;

  constructor(
    private pageLayoutService: PageLayoutService,
    private productListComponentService: ProductListComponentService,
    public scrollConfig: ViewConfig
  ) {}

  ngOnInit(): void {
    this.isInfiniteScroll = this.scrollConfig.view?.infiniteScroll?.active;

    this.subscription.add(
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
    this.subscription.unsubscribe();
  }

}
