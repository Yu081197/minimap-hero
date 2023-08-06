import { createSlice, current } from "@reduxjs/toolkit";

const initialState = 0;

const scoreSlice = createSlice({
  name: "score",
  initialState: initialState,
  reducers: {
    increaseScore: (state, action) => {
      return state + action.payload;
    },
    decreaseScore: (state, action) => {
      return state - action.payload;
    },
    resetScore: () => {
      return 0;
    },
  },
});

export const { resetScore, increaseScore, decreaseScore } = scoreSlice.actions;
export default scoreSlice.reducer;
