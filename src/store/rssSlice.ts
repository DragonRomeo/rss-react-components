import { createSlice } from '@reduxjs/toolkit';

const rssSlice = createSlice({
  name: 'rss',
  initialState: {
    search: [],
    products: [],
  },
  reducers: {
    addInputValue(state, action) {
      state.search = action.payload;
    },
    addApiData(state, action) {
      state.products = action.payload;
    },
  },
});

export const { addInputValue } = rssSlice.actions;
export const { addApiData } = rssSlice.actions;

export default rssSlice.reducer;
