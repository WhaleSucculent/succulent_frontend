import { initialAddressFormValues } from './address-form.initial';

import { PaymentFormValues } from './payment-form-values.interface';

export const initialPaymentFormValues: PaymentFormValues = {
    sameAsShipping: false,
    billingAddress: initialAddressFormValues,
};