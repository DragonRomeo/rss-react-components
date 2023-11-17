import { configureStore } from '@reduxjs/toolkit';
import rssSlice from './rssSlice';

export default configureStore({
  reducer: {
    data: rssSlice,
  },
});
