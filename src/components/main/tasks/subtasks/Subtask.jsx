import React, { useState } from 'react';
import CheckBox from '../../../../assets/icon-check.svg';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskInBoard } from '../../../../utils/helper';
import { updateBoard } from '../../../../utils/Api';
import { editBoard } from '../../../../redux/slices/boardSlice';

const Subtask = ({ subtask }) => {
	const { selectedBoard } = useSelector((state) => state.boards);
	const { selectedTask } = useSelector((state) => state.boards);
	const dispatch = useDispatch();
	const [isChecked, setIsChecked] = useState(subtask.isCompleted);

	const handleCheckboxChange = async () => {
		setIsChecked(!isChecked);
		console.log(!isChecked);
		const updatedBoard = updateTaskInBoard(
			{ ...selectedTask },
			{ ...selectedBoard },
			{ ...subtask, isCompleted: !isChecked }
		);
		await updateBoard(updatedBoard);
		//TODO: update board with task
		//dispatch(editBoard(updatedBoard));
	};

	return (
		<div className="flex gap-4">
			<label
				htmlFor={`checkbox-list${subtask.title}`}
				className="relative flex items-center w-full cursor-pointer gap-4 rounded bg-light_grey p-3 hover:bg-main_purple hover:bg-opacity-25 dark:bg-very_dark_grey"
			>
				<input
					id={`checkbox-list${subtask.title}`}
					type="checkbox"
					className="absolute h-0 w-0 opacity-0"
					checked={isChecked}
					onChange={handleCheckboxChange}
				/>
				<span
					className={`flex h-4 w-4 items-center ${
						isChecked ? 'bg-main_purple' : 'bg-white'
					} justify-center rounded-[4px] border border-medium_grey border-opacity-20  after:absolute
        after:top-1.5 after:h-2 after:w-2.5
       after:hidden after:content-none dark:bg-dark_grey`}
				>
					{isChecked && <img src={CheckBox} alt="Checkbox" />}
				</span>
				<p
					className={` text-12 font-700 text-black dark:text-white  ${
						isChecked && 'line-through opacity-50'
					}`}
				>
					{subtask.title}
				</p>
			</label>
		</div>
	);
};

export default Subtask;
