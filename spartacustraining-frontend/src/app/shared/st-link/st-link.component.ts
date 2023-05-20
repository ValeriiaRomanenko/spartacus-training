import {Component, Input, ViewEncapsulation} from '@angular/core';
import {StIconTypes} from "../st-icon.types";

@Component({
  selector: 'st-link',
  templateUrl: './st-link.component.html',
  styleUrls: ['./st-link.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StLinkComponent {
  @Input() iconType?: StIconTypes | undefined;
  @Input() text?: string;
  @Input() ariaLabel?: string;
  @Input() linkUrl?: string;
  @Input() routerUrl?: any;
}
