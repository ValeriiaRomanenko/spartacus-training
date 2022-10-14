import { StRegisterCustomerComponent } from '../../pages/register';
import { StCartComponent } from '../../pages/cart/containers';
import { StOrderSummaryComponent } from '../../pages/order-summary/containers';
import { StProductListComponent, StRefinementFacetComponent } from '../../pages/plp/containers';
import { StCheckoutShippingAddressComponent } from 'src/app/pages/checkout/shipping-address/containers';
import { StCheckoutDeliveryModeComponent } from 'src/app/pages/checkout/delivery-mode/containers';
import { StPaymentDetailsComponent } from 'src/app/pages/checkout/payment-details/containers';
import { StReviewOrderComponent } from 'src/app/pages/checkout/review-order/containers';
import { StTest1cmsComponent } from '../../pages/test1cms/containers/st-test1cms/st-test1cms.component';

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
  },
  test1cmsComponent: {
    component: StTest1cmsComponent
  }
}
