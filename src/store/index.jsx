import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "../services/ScoreSlice";

const store = configureStore({
  reducer: {
    score: scoreSlice,
  },
});

export default store;
