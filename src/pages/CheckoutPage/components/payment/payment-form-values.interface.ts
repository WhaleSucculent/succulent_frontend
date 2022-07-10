import { AddressFormValues } from '../address/address-form-values.interface';
import { PaymentMethod } from './components/payment-method.enum';

export interface PaymentFormValues {
    sameAsShipping: boolean;
    billingAddress: AddressFormValues;
    paymentMethod?: PaymentMethod;
}