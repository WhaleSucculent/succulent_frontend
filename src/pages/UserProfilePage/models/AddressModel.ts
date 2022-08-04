/* eslint-disable react-hooks/rules-of-hooks */

import { freeze } from "immer";

/**
 * model
 */

export interface AddressModel {
  readonly id: string;
  readonly street: string;
  readonly streetNumber: string;
  readonly city: string;
}

/**
 * default values
 */

export const useAddressModelDefaults = (): AddressModel => ({
  id: "",
  street: "",
  streetNumber: "",
  city: ""
});

/**
 * constructor
 */

export function getNewAddressModel(address: Partial<AddressModel> = {}) {
  return freeze({
    ...useAddressModelDefaults(),
    ...address
  });
}
