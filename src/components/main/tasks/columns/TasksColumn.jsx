import React from 'react';
import Task from '../Task';
import StatusTask from '../StatusTask';
import { v4 } from 'uuid';

const TasksColumn = ({ column, setOpen }) => {
	let name = column.name;
	let tasks = column.tasks;
	return (
		<div className="w-[280px] max-h-full overflow-y-auto flex flex-col flex-shrink-0 gap-[20px] scrollbar-hide">
			<StatusTask status={name} size={tasks.length} />

			{tasks &&
				tasks.map((task) => (
					<Task
						title={task.title}
						status={task.status}
						subtasks={task.subtasks}
						description={task.description}
						key={v4()}
						setOpen={setOpen}
					/>
				))}
		</div>
	);
};

export default TasksColumn;
