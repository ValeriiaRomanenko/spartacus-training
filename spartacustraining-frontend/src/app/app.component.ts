import { Component } from '@angular/core';
import { OutletPosition } from "@spartacus/storefront";
import { Image } from "@spartacus/core";
import { StIconTypes } from "./shared/st-icon.types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spartacustraining-frontend';
  outletPosition = OutletPosition;
  iconTypes = StIconTypes;

  getLogo(): Image {
    return {
      altText: 'Tsunami Logo',
      url: 'https://i.ibb.co/PMF6mFw/Gilroy-1655308043.jpg',
    }
  }
}
