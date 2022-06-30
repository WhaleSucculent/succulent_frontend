import { object } from 'yup';
import { TFunction } from 'i18next';
import { addressFormSchema } from './address-form.schema';

export const deliveryFormSchema = (t:TFunction) =>
object().shape({
  shippingAddress: addressFormSchema(t),
});