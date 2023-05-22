import { StRegisterCustomerComponent, StLoginFormComponent } from '../../pages/register';
import { StCartComponent } from '../../pages/cart/containers';
import { StSearchBoxComponent, StLoginComponent } from "../../shared";
import { StMiniCartComponent } from "../../shared/st-mini-cart/st-mini-cart.component";
import { StOrderSummaryComponent } from '../../pages/order-summary/containers';
import { StProductListComponent, StRefinementFacetComponent } from '../../pages/plp/containers';
import {AddToCartComponent} from "@spartacus/storefront";

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
  ProductGridComponent: {
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
  ProductAddToCartComponent: {
    component: AddToCartComponent,
    data: {
      inventoryDisplay: false,
    },
  },
}
