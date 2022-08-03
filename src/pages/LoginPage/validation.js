import * as yup from 'yup';
import { fieldNames } from './enumerations.js';

export const validationSchema = yup.object().shape({
  ["userName"]: yup
    .string()
    .min(4)
    .max(30)
    .required()
    .label('User name'),
  ["password"]: yup
    .string()
    .min(4)
    .max(30)
    .required()
    .label('Password'),
});
