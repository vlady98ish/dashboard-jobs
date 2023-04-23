import React, { useCallback, useState } from 'react';
import AddEditTask from '../common/form/tasks/AddEditTask';
import ModalWrapper from './ModalWrapper';
import { v4 } from 'uuid';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const AddEditTaskModal = ({ isOpen, onClose, title, isEdit = false }) => {
	const [subTasks, setSubTasks] = useState([{ id: 1 }]);
	const { selectedTask } = useSelector((state) => state.boards);

	const addColumn = useCallback(
		(e) => {
			e.preventDefault();
			setSubTasks([...subTasks, { id: subTasks.length + 1 }]);
		},
		[subTasks]
	);
	const deleteTask = useCallback((id) => {
		setSubTasks((prevState) => prevState.filter((task) => task.id !== id));
	}, []);

	const updateSubtasks = useCallback(() => {
		if (isEdit && selectedTask && selectedTask.subtasks) {
			setSubTasks(
				selectedTask.subtasks.map((subTask) => ({ ...subTask, id: v4() }))
			);
		}
	}, [selectedTask, isEdit, setSubTasks]);

	useEffect(() => {
		updateSubtasks();
	}, [updateSubtasks]);

	return (
		<ModalWrapper isOpen={isOpen} onClose={onClose}>
			<h2 className="font-700 lg:text-18 lg:leading-23 dark:text-white ">
				{title}
			</h2>

			<AddEditTask
				subTasks={subTasks}
				onColumnChange={deleteTask}
				addColumn={addColumn}
				closeModel={onClose}
				editForm={isEdit}
			/>
		</ModalWrapper>
	);
};

export default AddEditTaskModal;
