import { createAction } from '@reduxjs/toolkit';

export const increaseValueHome = createAction<number>('increaseValue');
export const decreaseValueHome = createAction<number>('decreaseValue');
