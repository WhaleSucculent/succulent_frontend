/* eslint-disable react-hooks/rules-of-hooks */

import { freeze } from "immer";
import { PersonModel, usePersonModelDefaults } from "./PersonModel";
import { AddressModel } from "./AddressModel";

/**
 * model
 */

interface ContactModel {
  person: PersonModel;
  addresses: AddressModel[];
}

/**
 * default values
 */

const useContactModelDefaults = (): ContactModel => ({
  person: usePersonModelDefaults(),
  addresses: []
});

/**
 * constructor
 */

export function getNewContactModel(contact: Partial<ContactModel> = {}) {
  return freeze(
    {
      ...useContactModelDefaults(),
      ...contact
    },
    true
  );
}

/**
 * methods
 */

export function addAddress(contact: ContactModel, address: AddressModel) {
  const addressAlreadyExists = contact.addresses.some(
    ({ id }) => id === address.id
  );

  if (addressAlreadyExists) {
    throw new Error("address already exists on this contact");
  }

  return getNewContactModel({
    ...contact,
    addresses: [...contact.addresses, address]
  });
}

export function removeAddress(contact: ContactModel, address: AddressModel) {
  return getNewContactModel({
    ...contact,
    addresses: contact.addresses.filter(({ id }) => id !== address.id)
  });
}
