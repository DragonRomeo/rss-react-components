import { createSlice } from '@reduxjs/toolkit';

const rssSlice = createSlice({
  name: 'rss',
  initialState: {
    rss: [],
    products: [],
  },
  reducers: {
    addInputValue(state, action) {
      state.rss.push({
        text: action.payload,
      });
    },
    addApiData(state, action) {
      state.products = action.payload;
    },
  },
});

export const { addInputValue } = rssSlice.actions;
export const { addApiData } = rssSlice.actions;

export default rssSlice.reducer;
