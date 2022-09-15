import { StRegisterCustomerComponent } from '../../pages/register';
import { StCartComponent } from '../../pages/cart/containers';
import { StOrderSummaryComponent } from '../../pages/order-summary/containers';

export const stCmsComponentsConfig = {
  RegisterCustomerComponent: {
    component: StRegisterCustomerComponent
  },
  CartComponent: {
    component: StCartComponent
  },
  CartTotalsComponent: {
    component: StOrderSummaryComponent
  }
}
