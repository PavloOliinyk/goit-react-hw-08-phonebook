import { createReducer } from '@reduxjs/toolkit';
import { filterContact, isLogin, setToken } from './actions';

export const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export const token = createReducer('', {
  [setToken]: (_, action) => action.payload,
});

export const isLoggetIn = createReducer(false, {
  [isLogin]: (_, action) => action.payload,
});
