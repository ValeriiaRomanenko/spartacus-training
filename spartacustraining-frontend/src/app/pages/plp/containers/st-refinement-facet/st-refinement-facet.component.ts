import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointService, ICON_TYPE } from '@spartacus/storefront';
import { asapScheduler, BehaviorSubject, interval, Observable, of } from 'rxjs';
import { delayWhen, observeOn, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-st-refinement-facet',
  templateUrl: './st-refinement-facet.component.html',
  styleUrls: ['./st-refinement-facet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StRefinementFacetComponent {

  private _CLOSE_DELAY = 300;
  private _open$ = new BehaviorSubject(false);

  @ViewChild('trigger') trigger: ElementRef<HTMLElement>;

  iconTypes = ICON_TYPE;
  isOpen$: Observable<boolean> = this._breakpointService.breakpoint$.pipe(
    observeOn(asapScheduler),
    switchMap(() => (this.hasTrigger ? this._open$ : of(true))),
    delayWhen((launched) => interval(launched ? 0 : this._CLOSE_DELAY))
  );
  isActive$ = this._open$.pipe(observeOn(asapScheduler));

  constructor(private _breakpointService: BreakpointService) {}

  launch() {
    this._open$.next(true);
  }

  close() {
    this._open$.next(false);
    this.trigger.nativeElement.focus();
  }

  get hasTrigger() {
    return this.trigger.nativeElement.offsetParent !== null;
  }
}
