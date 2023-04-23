import React from 'react';
import TasksColumn from './TasksColumn';
import { v4 } from 'uuid';
import NewColumn from './NewColumn';

const TaskColumnWrapper = ({
	columns,
	setOpen,
	setOpenEditModal,
	setIsEdit
}) => {
	return (
		<div className="flex flex-row gap-[24px] h-full ">
			{columns.map((column) => (
				<TasksColumn column={column} key={v4()} setOpen={setOpen} />
			))}
			<NewColumn setOpenEditModal={setOpenEditModal} setIsEdit={setIsEdit} />
		</div>
	);
};

export default TaskColumnWrapper;
