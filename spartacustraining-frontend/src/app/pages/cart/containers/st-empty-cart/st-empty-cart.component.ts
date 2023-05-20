import { Component } from '@angular/core';
import {Image} from "@spartacus/core";

@Component({
  selector: 'st-empty-cart',
  templateUrl: './st-empty-cart.component.html',
  styleUrls: ['./st-empty-cart.component.scss']
})
export class StEmptyCartComponent {

  emptyImage: Image = {
    url: 'https://thelace.com.ua/wp-content/themes/konte/images/empty-bag.svg'
  }

}
