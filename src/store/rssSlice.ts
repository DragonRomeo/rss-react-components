import { createSlice } from '@reduxjs/toolkit';

const rssSlice = createSlice({
  name: 'rss',
  initialState: {
    rss: [],
  },
  reducers: {
    addInputValue(state, action) {
      console.log(state);
      console.log(action);

      state.rss.push({
        text: action.payload,
      });
      console.log(state.rss);
    },
    addApiData(state, action) {
      console.log(state);
      console.log(action);

      state.rss.push({
        items2: action ? action.payload : [],
      });
    },
  },
});

export const { addInputValue } = rssSlice.actions;
export const { addApiData } = rssSlice.actions;

export default rssSlice.reducer;
