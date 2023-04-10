import { configureStore } from "@reduxjs/toolkit";
import themeChangerReducer from "../features/theme/themeSlice";
import boardsReducer from "../features/theme/boardSlice";
import layoutReducer from "../features/theme/layoutSlice";

const store = configureStore({
  reducer: {
    themeChanger: themeChangerReducer,
    boards: boardsReducer,
    sidebar: layoutReducer,
  },
});

export default store;
