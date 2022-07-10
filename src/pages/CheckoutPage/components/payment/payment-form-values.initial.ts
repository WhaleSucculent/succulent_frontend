import { initialAddressFormValues } from '../address/address-form.initial';
import { PaymentMethod } from './components/payment-method.enum';
import { PaymentFormValues } from './payment-form-values.interface';

export const initialPaymentFormValues: PaymentFormValues = {
    sameAsShipping: false,
    billingAddress: initialAddressFormValues,
    paymentMethod: PaymentMethod.wechat
};