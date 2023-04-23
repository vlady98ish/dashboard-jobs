import React, { useCallback, useState } from 'react';
import AddEditTask from '../common/form/tasks/AddEditTask';
import ModalWrapper from './ModalWrapper';

const AddEditTaskModal = ({ isOpen, onClose, title }) => {
	const [subTasks, setSubTasks] = useState([{ id: 1 }]);

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
			/>
		</ModalWrapper>
	);
};

export default AddEditTaskModal;
