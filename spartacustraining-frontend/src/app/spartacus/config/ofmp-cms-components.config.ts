import { StRegisterCustomerComponent, StLoginFormComponent } from '../../pages/register';
import { StCartComponent } from '../../pages/cart/containers';
import { StSearchBoxComponent, StLoginComponent } from "../../shared";
import { StMiniCartComponent } from "../../shared/st-mini-cart/st-mini-cart.component";

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
