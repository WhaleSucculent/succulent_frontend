import { initialDevlieryFormValues } from "./delivery-form-values.initial";
import { initialPaymentFormValues } from "./payment-form-values.initial";

import { CheckoutState } from "./checkout-state.interface";

export const initialCheckoutState:CheckoutState = {
    deliveryForm: initialDevlieryFormValues,
    paymentForm: initialPaymentFormValues,
}