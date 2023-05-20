import {Component, ElementRef, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {CmsService, PageType, RoutingService} from "@spartacus/core";
import {filter, map, switchMap, takeUntil} from "rxjs/operators";
import {FocusConfig, ICON_TYPE, LaunchDialogService} from "@spartacus/storefront";
import {Page} from "@spartacus/core/src/cms/model/page.model";
import {ContentSlotComponentData} from "@spartacus/core/src/cms/model/content-slot-component-data.model";

const pageSlotPositionMapper: { [key in string]: string } = {
  'login': 'LeftContentSlot',
  'register': 'BodyContent'
};

@Component({
  selector: 'st-register-modal',
  templateUrl: './st-register-modal.component.html',
  styleUrls: ['./st-register-modal.component.scss']
})
export class StRegisterModalComponent implements OnInit, OnDestroy {

  destroy$$ = new Subject<any>();

  focusConfig: FocusConfig = {
    trap: true,
    block: true,
    autofocus: 'button',
    focusOnEscape: true,
  };
  iconTypes = ICON_TYPE;

  @HostListener('click', ['$event'])
  handleClick(event: UIEvent): void {
    if ((event.target as any).tagName === this.el.nativeElement.tagName) {
      this.dismissModal('Cross click');
    }
  }

  pageData$: Observable<Page> = this.launchDialogService.data$.pipe(
    switchMap((data) =>
      this._cmsService.getPage({
        id: `/${data.routeConfig.path}`,
        type: PageType.CONTENT_PAGE
      }, true)),
  );

  components$: Observable<ContentSlotComponentData[]> = this.pageData$.pipe(
    map((page: Page) => {
      const slotPosition = pageSlotPositionMapper[page.pageId || 0];
      console.log(page.slots);

      return page.slots && page.slots[slotPosition].components || [];
    })
  );

  constructor(
    private _cmsService: CmsService,
    protected launchDialogService: LaunchDialogService,
    private el: ElementRef,
    private routingService: RoutingService
  ) {
  }

  ngOnInit() {
    this.routingService.getRouterState().pipe(
      takeUntil(this.destroy$$),
      filter((state) => !!state.nextState),
      map(() => this.dismissModal('dismiss'))
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  dismissModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }
}
