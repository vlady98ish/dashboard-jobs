import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	boardList: [],
	selectedBoard: null,
	jobList: [],
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
		createBoardForSlice: (state, action) => {
			state.boardList = [...state.boardList, action.payload];
		},
		deleteBoardFromSlice: (state, action) => {
			state.boardList = state.boardList.filter(
				(board) => board.id !== action.payload
			);
			state.selectedBoard = null;
		},
		addTaskToColumn: (state, action) => {
		
		
		}
	}
});

export const {
	setBoards,
	setSelectedBoard,
	setIsLoading,
	getSelectedBoard,
	deleteBoardFromSlice,
	createBoardForSlice
} = boardSlice.actions;

export default boardSlice.reducer;
