import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { dummyApi } from './apiSlice';
import rssSlice from './rssSlice';

export const store = configureStore({
  reducer: {
    data: rssSlice,
    [dummyApi.reducerPath]: dummyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dummyApi.middleware),
});

setupListeners(store.dispath);
