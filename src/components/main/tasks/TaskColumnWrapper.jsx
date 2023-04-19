import React from 'react';
import TasksColumn from './TasksColumn';
import { v4 } from 'uuid';

const TaskColumnWrapper = ({ columns, setOpen }) => {
	return (
		<div className="flex flex-row gap-[24px] h-full">
			{columns.map((column) => (
				<TasksColumn column={column} key={v4()} setOpen={setOpen} />
			))}
		</div>
	);
};

export default TaskColumnWrapper;
