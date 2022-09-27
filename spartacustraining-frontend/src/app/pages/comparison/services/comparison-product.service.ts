import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseSiteService, OccEndpointsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ComparisonProducts } from '../models';

@Injectable()
export class ComparisonProductService {

  private _storageKey = 'comparisonData';
  private _daysToExpired = 1;

  constructor(
    private httpClient: HttpClient,
    private baseSiteService: BaseSiteService,
    protected occEndpoints: OccEndpointsService
  ) { }

  public get(): Observable<ComparisonProducts>{
    return this.httpClient.get<ComparisonProducts>(this.getUrl() + this.getState().products);
  }

  public deleteProduct(productCode: string) {
    const state = this.getState();
    const position = state.products.indexOf(productCode);

    if (position > -1) {
      state.products.splice(position, 1);
    }

    localStorage.setItem(this._storageKey, JSON.stringify(state));
  }

  public addProduct(productCode) {
    const state = this.getState();
    const exist = state.products.filter(element => element === productCode);
    if (exist.length === 0) {
      state.products.push(productCode);
      state.expiredDate = this.getDateToExpired();
    }

    localStorage.setItem(this._storageKey, JSON.stringify(state));
  }

  public validateComparionList() {
    const state = this.getState();

    if (state.expiredDate < new Date()) {
      localStorage.removeItem(this._storageKey);
    }
  }

  private getState() {
    const comparison = {
      products: [],
      expiredDate: this.getDateToExpired(),
    };

    let state;
    try {
      state = JSON.parse(localStorage.getItem(this._storageKey));
      if (state === null) {
        state = comparison;
      }
    } catch (e) {
      state = comparison;
    }

    return state;
  }

  private getDateToExpired() {
    const date = new Date();

    return date.setDate(date.getDate() + this._daysToExpired);
  }

  private getUrl() {
    return this.occEndpoints.getBaseUrl() + '/comparison/products/';
  }
}
