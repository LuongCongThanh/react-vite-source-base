import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './app.reducers';

export const store = configureStore({
  reducer: rootReducer
});

// Lấy RootState và AppDispatch từ store của chúng ta
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
