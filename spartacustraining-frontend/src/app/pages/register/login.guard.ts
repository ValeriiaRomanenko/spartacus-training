import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { CmsPageGuard, LaunchDialogService } from "@spartacus/storefront";
import { AuthConfigService, AuthService, OAuthFlow } from "@spartacus/core";
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate, CanActivateChild {
  constructor(
    protected authService: AuthService,
    protected authConfigService: AuthConfigService,
    protected cmsPageGuard: CmsPageGuard,
    private launchDialogService: LaunchDialogService,
    private location: Location,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkActivation(route, state);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkActivation(route, state);
  }

  checkActivation(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isUserLoggedIn().pipe(
      take(1),
      switchMap((isUserLoggedIn: boolean) => {
        if (
          this.authConfigService.getOAuthFlow() ===
          OAuthFlow.ResourceOwnerPasswordFlow ||
          isUserLoggedIn
        ) {
          return this.cmsPageGuard.canActivate(route, state);
        } else {
          // This method can trigger redirect to OAuth server that's why we don't return anything in this case
          const redirected = this.authService.loginWithRedirect();
          if (!redirected) {
            return of(false);
          }
          return EMPTY;
        }
      }),
      filter((result: boolean | UrlTree) => Boolean(result) === result),
      map(() => {
        this.launchDialogService.openDialogAndSubscribe('LOGIN_MODAL', undefined, route);
        this.router.navigateByUrl(this.router.routerState.snapshot.url, { skipLocationChange: true });

        return false;
      }),
    );
  }
}
