import { StRegisterCustomerComponent } from '../../pages/register';
import { StCartComponent } from '../../pages/cart/containers';
import { StOrderSummaryComponent } from '../../pages/order-summary/containers';
import { StProductListComponent, StRefinementFacetComponent } from '../../pages/plp/containers';
import { StCheckoutShippingAddressComponent } from 'src/app/pages/checkout/shipping-address/containers';
import { StCheckoutDeliveryModeComponent } from 'src/app/pages/checkout/delivery-mode/containers';
import { StPaymentDetailsComponent } from 'src/app/pages/checkout/payment-details/containers';

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
  }
}
