import { createSlice } from '@reduxjs/toolkit';

const rssSlice = createSlice({
  name: 'rss',
  initialState: {
    rss: [],
    products: [],
  },
  reducers: {
    addInputValue(state, action) {
      // console.log(state);
      // console.log(action);

      state.rss.push({
        text: action.payload,
      });
      // console.log(state.rss);
    },
    addApiData(state, action) {
      console.log(state);
      console.log(action);

      state.products = action.payload;
    },
  },
});

export const { addInputValue } = rssSlice.actions;
export const { addApiData } = rssSlice.actions;

export default rssSlice.reducer;
