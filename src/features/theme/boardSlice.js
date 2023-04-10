import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  boardList: [],
  selectedBoard: null,
  jobList: [],
  isLoading: false,
  
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boardList = action.payload;
    },
    setSelectedBoard: (state, action) => {
      state.selectedBoard = state.boardList[action.payload];
    },
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const {setBoards, setSelectedBoard, setIsLoading, getSelectedBoard} =
  boardSlice.actions;

export default boardSlice.reducer;
