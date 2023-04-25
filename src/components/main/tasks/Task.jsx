import React from 'react';
import { setSelectedTask } from '../../../redux/slices/boardSlice';
import { useDispatch } from 'react-redux';

const Task = ({ title, description, status, subtasks, setOpen }) => {
	const dispatch = useDispatch();
	return (
		<div
			className="cursor-pointer bg-white px-[16px] py-[23px] shadow-task rounded-[8px] dark:bg-dark_grey [&_h2]:hover:text-main_purple"
			onClick={() => {
				dispatch(setSelectedTask({ title, description, status, subtasks }));
				setOpen(true);
			}}
		>
			<h2 className="font-700 leading-19 text-15 text-black dark:text-white">
				{title}
			</h2>
			<p className="font-700 leading-15  text-12 text-medium_grey mt-[8px]">
				0 of {`${subtasks && subtasks.length} `}
				subtasks
			</p>
		</div>
	);
};

export default Task;
