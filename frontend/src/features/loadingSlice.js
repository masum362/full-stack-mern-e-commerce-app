import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    toggleLoading: (state) => {
        state= !state
        return state;
      },
  },
});

export const {toggleLoading} = loadingSlice.actions
export default loadingSlice.reducer

