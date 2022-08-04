/* eslint-disable react-hooks/rules-of-hooks */

import { freeze } from "immer";

/**
 * model
 */

export interface PersonModel {
  readonly firstName: string;
  readonly lastName: string;
//   readonly phone: phone;
}

/**
 * default values
 */

export const usePersonModelDefaults = (): PersonModel => ({
  firstName: "",
  lastName: "",
//   phone: ""
});

/**
 * constructor
 */

export function getNewPersonModel(person: Partial<PersonModel> = {}) {
  return freeze({
    ...usePersonModelDefaults(),
    ...person
  });
}
