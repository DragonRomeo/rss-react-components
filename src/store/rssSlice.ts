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
        inputValue: action.payload.value,
      });
    },
  },
});

export const { addInputValue } = rssSlice.actions;

export default rssSlice.reducer;
