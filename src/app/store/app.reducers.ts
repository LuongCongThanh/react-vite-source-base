import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '@features/HomePage/middleware/home.reducer';

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
