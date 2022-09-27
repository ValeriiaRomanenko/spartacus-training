import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComparisonProductService } from '../../pages/comparison/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComparisonProductInterceptorService implements HttpInterceptor {

  constructor(private _comparisonProductService: ComparisonProductService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._comparisonProductService.validateComparionList();
    return next.handle(req);
  }
}
