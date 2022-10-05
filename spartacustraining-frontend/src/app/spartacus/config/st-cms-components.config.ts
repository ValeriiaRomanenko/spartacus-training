import { StRegisterCustomerComponent, StLoginFormComponent } from '../../pages/register';
import { StCartComponent } from '../../pages/cart/containers';
import { StSearchBoxComponent, StLoginComponent } from "../../shared";
import { StMiniCartComponent } from "../../shared/st-mini-cart/st-mini-cart.component";
import { StOrderSummaryComponent } from '../../pages/order-summary/containers';
import { StProductListComponent, StRefinementFacetComponent } from '../../pages/plp/containers';
import { AddToCartComponent } from "@spartacus/storefront";
import { StCheckoutShippingAddressComponent } from 'src/app/pages/checkout/shipping-address/containers';
import { StCheckoutDeliveryModeComponent } from 'src/app/pages/checkout/delivery-mode/containers';
import { StPaymentDetailsComponent } from 'src/app/pages/checkout/payment-details/containers';
import { StReviewOrderComponent } from 'src/app/pages/checkout/review-order/containers';

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
  ProductAddToCartComponent: {
    component: AddToCartComponent,
    data: {
      inventoryDisplay: false,
    },
  },
  CheckoutShippingAddress: {
    component: StCheckoutShippingAddressComponent
  },
  CheckoutDeliveryMode: {
    component: StCheckoutDeliveryModeComponent
  },
  CheckoutPaymentDetails: {
    component: StPaymentDetailsComponent
  },
  CheckoutReviewOrder: {
    component: StReviewOrderComponent
  }
}
