import { StRegisterCustomerComponent } from '../../pages/register';
import { StCartComponent } from '../../pages/cart/containers';
import { StOrderSummaryComponent } from '../../pages/order-summary/containers';
import { StProductListComponent, StRefinementFacetComponent } from '../../pages/plp/containers';

export const stCmsComponentsConfig = {
  RegisterCustomerComponent: {
    component: StRegisterCustomerComponent
  },
  CartComponent: {
    component: StCartComponent
  },
  CartTotalsComponent: {
    component: StOrderSummaryComponent
  },
  CMSProductListComponent: {
    component: StProductListComponent
  },
  ProductRefinementComponent: {
    component: StRefinementFacetComponent
  }
}
