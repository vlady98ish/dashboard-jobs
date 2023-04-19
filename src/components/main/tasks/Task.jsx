import React from 'react';

const Task = ({ title, description, status, subtasks, setOpen }) => {
	return (
		<div
			className="cursor-pointer bg-white px-[16px] py-[23px] shadow-task rounded-[8px] dark:bg-dark_grey [&_h2]:hover:text-main_purple"
			onClick={() => setOpen(true)}
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
