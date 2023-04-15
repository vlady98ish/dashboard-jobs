// This component renders an individual board item in the board list.
// It uses Redux to handle the state of the selected board.
// It also imports two icons for displaying the board based on its selected status.

import React from 'react';
// Importing board icons
import IconBoardGray from '../../assets/icon-board.svg';
import IconBoardWhite from '../../assets/icon-board-white.svg';

import { useDispatch, useSelector } from 'react-redux';
import { handleClick } from '../../utils/handler';

const BoardItem = ({ board, id }) => {
	const dispatch = useDispatch();
	const { selectedBoard } = useSelector((state) => state.boards);

	// Setting styles for the board item depending on its status
	const hoverStyle = `hover:bg-main_purple rounded-r-[100px] hover:bg-opacity-10 hover:text-main_purple dark:hover:bg-white`;
	const activeStyle = `bg-main_purple rounded-r-[100px] p-0`;
	let active = selectedBoard ? selectedBoard.id === id : false;
	return (
		<li
			className={`flex items-center text-medium_grey justify-start gap-5 lg:pl-8  cursor-pointer py-[15px] pl-[24px] ${
				active ? `${activeStyle}` : `${hoverStyle}`
			}`}
			onClick={() => handleClick(dispatch, id - 1)}
		>
			{/* Displaying board icon based on selected status */}
			<img
				src={active ? IconBoardWhite : IconBoardGray}
				alt="icon-board"
				className="w-[16px] h-[16px]"
			/>
			<span
				className={` text-15 leading-19 font-700 ${
					active ? `text-white` : ''
				} `}
			>
				{board.name}
			</span>
		</li>
	);
};

export default BoardItem;
