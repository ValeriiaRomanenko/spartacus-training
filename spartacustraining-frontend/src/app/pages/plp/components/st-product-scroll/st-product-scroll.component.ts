import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { ProductSearchPage } from '@spartacus/core';
import { ProductListComponentService, ViewConfig, ViewModes } from '@spartacus/storefront';
import { Subscription} from 'rxjs';

@Component({
  selector: 'st-product-scroll',
  templateUrl: './st-product-scroll.component.html',
  styleUrls: ['./st-product-scroll.component.scss']
})
export class StProductScrollComponent implements OnDestroy {

  private _subscription = new Subscription();

  @Input('scrollConfig')
  set setConfig(inputConfig: ViewConfig) {
    this.setComponentConfigurations(inputConfig);
  }

  model: ProductSearchPage;
  @Input('model')
  set setModel(inputModel: ProductSearchPage) {
    this.infiniteScrollOperations(inputModel);
  }

  inputViewMode: ViewModes;
  @Input('inputViewMode')
  set setViewMode(inputViewMode: ViewModes) {
    this.inputViewMode = inputViewMode;
    if (this.viewMode) {
      this._resetListOnViewModeChange();
    } else {
      this.viewMode = inputViewMode;
    }
  }

  viewMode: ViewModes;
  productLimit: number;
  maxProducts: number;

  ViewModes = ViewModes;
  appendProducts = false;
  resetList = false;
  isMaxProducts = false;
  isLastPage = false;
  isEmpty = false;

  constructor(
    private _productListComponentService: ProductListComponentService,
    private _ref: ChangeDetectorRef
  ) {}

  scrollPage(pageNumber: number): void {
    this.appendProducts = true;
    this._ref.markForCheck();
    this._productListComponentService.getPageItems(pageNumber);
  }

  loadNextPage(pageNumber: number): void {
    this.isMaxProducts = false;
    this.scrollPage(pageNumber);
  }

  scrollToTop(): void {
    window.scroll(0, 0);
  }

  private setComponentConfigurations(scrollConfig: ViewConfig): void {
    const isButton = scrollConfig.view?.infiniteScroll?.showMoreButton;
    const configProductLimit = scrollConfig.view?.infiniteScroll?.productLimit;
    this.productLimit = isButton ? 1 : configProductLimit;
  }

  private infiniteScrollOperations(inputModel: ProductSearchPage): void {
    if (this.appendProducts) {
      this.model = {
        ...inputModel,
        products: this.model.products.concat(inputModel.products),
      };
    } else {
      this.model = inputModel;
      this.maxProducts = this.productLimit;
    }
    this._setConditions();
    this._ref.markForCheck();
  }

  private _resetListOnViewModeChange(): void {
    this.scrollToTop();
    this.resetList = true;
    this._productListComponentService.getPageItems(0);
  }

  private _setConditions(): void {
    this.isEmpty = !this.model.products || this.model.products.length === 0;

    this.isLastPage =
      this.model.pagination.currentPage ===
      this.model.pagination.totalPages - 1;

    this.isMaxProducts =
      this.productLimit &&
      this.productLimit !== 0 &&
      this.model.products.length >= this.maxProducts;

    if (this.isMaxProducts) {
      this.maxProducts = this.model.products.length + this.productLimit;
    }
    if (this.viewMode !== this.inputViewMode) {
      this.viewMode = this.inputViewMode;
    }

    this.resetList = false;
    this.appendProducts = false;
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
