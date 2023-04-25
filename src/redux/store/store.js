import { configureStore } from '@reduxjs/toolkit';
import themeChangerReducer from '../slices/themeSlice';
import boardsReducer from '../slices/boardSlice';
import layoutReducer from '../slices/layoutSlice';

const store = configureStore({
	reducer: {
		themeChanger: themeChangerReducer,
		boards: boardsReducer,
		sidebar: layoutReducer
	}
});

export default store;
