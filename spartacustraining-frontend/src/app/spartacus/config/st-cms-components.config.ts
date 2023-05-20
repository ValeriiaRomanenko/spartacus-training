import { StRegisterCustomerComponent } from '../../pages/register';
import { StCartComponent } from '../../pages/cart/containers';
import { StSearchBoxComponent } from "../../shared";
import { StLoginComponent } from '../../shared';
import { StMiniCartComponent } from "../../shared/st-mini-cart/st-mini-cart.component";
import { StLoginFormComponent } from "../../pages/register";
import { StOrderSummaryComponent } from '../../pages/order-summary/containers';
import { StProductListComponent, StRefinementFacetComponent } from '../../pages/plp/containers';
import { StCheckoutShippingAddressComponent } from 'src/app/pages/checkout/shipping-address/containers';

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
  CheckoutShippingAddress: {
    component: StCheckoutShippingAddressComponent
  }
}
