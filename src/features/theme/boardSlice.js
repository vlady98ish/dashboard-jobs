import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	boardList: [],
	selectedBoard: null,
	selectedTask: {},
	isLoading: false
};

const boardSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {
		setBoards: (state, action) => {
			state.boardList = action.payload;
		},
		setSelectedBoard: (state, action) => {
			state.selectedBoard = state.boardList.find(
				(board) => board.id === action.payload
			);
		},
		setIsLoading: (state) => {
			state.isLoading = !state.isLoading;
		},
		setSelectedTask: (state, action) => {
			state.selectedTask = action.payload;
		},
		updateSelectedTask: (state, action) => {
			state.selectedTask.status = action.payload;
		},
		addBoard: (state, action) => {
			state.boardList = [...state.boardList, action.payload];
		},
		editBoard: (state, action) => {
			const board = action.payload;
			const boardForUpdate = state.boardList.find(
				(board) => board.id === state.selectedBoard.id
			);
			boardForUpdate.name = board.name;
			boardForUpdate.columns = board.columns;
			state.selectedBoard = boardForUpdate;
		},
		deleteBoardFromSlice: (state, action) => {
			state.boardList = state.boardList.filter(
				(board) => board.id !== action.payload
			);
			state.selectedBoard = null;
		},
		addTaskToColumn: (state, action) => {}
	}
});

export const {
	setBoards,
	setSelectedBoard,
	setIsLoading,
	deleteBoardFromSlice,
	addBoard,
	editBoard,
	setSelectedTask,
	updateSelectedTask
} = boardSlice.actions;

export default boardSlice.reducer;
