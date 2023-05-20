import {Component} from '@angular/core';
import {LoginFormComponent} from "@spartacus/user/account/components";

@Component({
  selector: 'st-login-form',
  templateUrl: './st-login-form.component.html',
  styleUrls: ['./st-login-form.component.scss']
})
export class StLoginFormComponent extends LoginFormComponent{
}
