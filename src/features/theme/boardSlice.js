import { createSlice } from '@reduxjs/toolkit';
import {
	addTaskToColumn,
	findColumnByName,
	removeTaskFromColumn
} from '../../utils/helper';

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
			const newColumnName = action.payload;
			let { selectedBoard, selectedTask } = state;
			const oldColumnName = selectedTask.status;
			const board = state.boardList.find(
				(board) => board.id === state.selectedBoard.id
			);
			const oldColumn = findColumnByName(board, oldColumnName);

			const newColumn = findColumnByName(board, newColumnName);

			removeTaskFromColumn(oldColumn, selectedTask.title);

			state.selectedTask = { ...selectedTask, status: newColumnName };
			newColumn.tasks.push(state.selectedTask);
			state.selectedBoard = { ...selectedBoard, columns: board.columns };
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
		}
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
