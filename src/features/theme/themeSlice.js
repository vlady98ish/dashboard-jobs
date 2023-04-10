import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeChangerSlice = createSlice({
  name: "themeChanger",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
  },
});

export const { changeTheme } = themeChangerSlice.actions;

export default themeChangerSlice.reducer;
