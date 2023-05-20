import {Component, ViewEncapsulation} from '@angular/core';
import {LoginComponent} from "@spartacus/user/account/components";
import {StIconTypes} from "../st-icon.types";

@Component({
  selector: 'st-login',
  templateUrl: './st-login.component.html',
  styleUrls: ['./st-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StLoginComponent extends LoginComponent {
  iconTypes = StIconTypes;
}
