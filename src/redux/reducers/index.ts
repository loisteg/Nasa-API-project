import { combineReducers } from '@reduxjs/toolkit';

import { neoReducer } from '../api/neoApi';
import { apodReducer } from '../api/apodApi';
import { counterReducer } from '../api/counterApi';

export default combineReducers({
  [neoReducer.reducerPath]: neoReducer.reducer,
  [apodReducer.reducerPath]: apodReducer.reducer,
  [counterReducer.reducerPath]: counterReducer.reducer,
});
