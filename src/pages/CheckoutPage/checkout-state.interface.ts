import { DeliveryFormValues } from "./delivery-form-values.interface";
import { PaymentFormValues } from "./payment-form-values.interface";

export interface CheckoutState{
    deliveryForm: DeliveryFormValues;
    paymentForm: PaymentFormValues;
}