import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { decreaseValueHome, increaseValueHome } from '@features/HomePage/middleware/home.action';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(increaseValueHome, (state, action: PayloadAction<number>) => {
      console.log('increase', action);
      state.value += action.payload;
    })
    .addCase(decreaseValueHome, (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    });
});

export default counterReducer;
