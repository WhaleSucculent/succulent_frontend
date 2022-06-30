import { AddressFormValues } from './address-form-values.interface';

export interface PaymentFormValues {
    sameAsShipping: boolean;
    billingAddress: AddressFormValues;
}