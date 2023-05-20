import { Component } from '@angular/core';
import {MiniCartComponent} from "@spartacus/storefront";
import {StIconTypes} from "../st-icon.types";

@Component({
  selector: 'st-mini-cart',
  templateUrl: './st-mini-cart.component.html',
  styleUrls: ['./st-mini-cart.component.scss']
})
export class StMiniCartComponent extends MiniCartComponent {
  stIconTypes = StIconTypes
}
