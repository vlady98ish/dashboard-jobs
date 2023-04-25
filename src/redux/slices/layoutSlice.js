import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hidden: false,
};

const layoutSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const { toggleSideBar } = layoutSlice.actions;

export default layoutSlice.reducer;
