import { StRegisterCustomerComponent } from '../../pages/register';
import { StCartComponent } from '../../pages/cart/containers';
import { StSearchBoxComponent } from "../../shared";
import { StLoginComponent } from '../../shared';
import { StMiniCartComponent } from "../../shared/st-mini-cart/st-mini-cart.component";
import { StLoginFormComponent } from "../../pages/register";

export const stCmsComponentsConfig = {
  RegisterCustomerComponent: {
    component: StRegisterCustomerComponent
  },
  CartComponent: {
    component: StCartComponent
  },
  SearchBoxComponent: {
    component: StSearchBoxComponent
  },
  LoginComponent: {
    component: StLoginComponent,
  },
  MiniCartComponent: {
    component: StMiniCartComponent,
  },
  ReturningCustomerLoginComponent: {
    component: StLoginFormComponent
  },
}
