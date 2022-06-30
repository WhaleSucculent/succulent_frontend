import { combineReducers } from '@reduxjs/toolkit';

import { checkoutSlice } from './checkout.slice';

import { RootState } from './root-state.interface';

export const rootReducer = combineReducers<RootState>({
  checkout: checkoutSlice.reducer,
});