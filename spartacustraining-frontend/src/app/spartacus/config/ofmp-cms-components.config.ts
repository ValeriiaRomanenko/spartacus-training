import { StRegisterCustomerComponent } from '../../pages/register';
import { StSearchBoxComponent } from "../../shared";
import { StLoginComponent } from '../../shared';
import { StMiniCartComponent } from "../../shared/st-mini-cart/st-mini-cart.component";
import { StLoginFormComponent } from "../../pages/register";

export const stCmsComponentsConfig = {
  RegisterCustomerComponent: {
    component: StRegisterCustomerComponent
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
  // BreadcrumbComponent: {
  //   component: BreadcrumbComponent,
  // },
  // CategoryNavigationComponent: {
  //   component: CategoryNavigationComponent,
  //   data: {
  //     resetMenuOnClose: true,
  //   },
  // },
}
