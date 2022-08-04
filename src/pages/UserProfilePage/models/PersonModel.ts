/* eslint-disable react-hooks/rules-of-hooks */

import { freeze } from "immer";

/**
 * model
 */

export interface PersonModel {
  readonly firstName: string;
  readonly lastName: string;
}

/**
 * default values
 */

export const usePersonModelDefaults = (): PersonModel => ({
  firstName: "",
  lastName: ""
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
