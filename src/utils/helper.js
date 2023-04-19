import { toast } from 'react-toastify';
import { ERROR, SUCCESS } from './constant';
import { v4 } from 'uuid';

export const addTaskToColumn = (board, columnName, task) => {
	let column = findColumnForName(board, columnName);
	if (column) {
		column.tasks.push(task);
	}
};

export const transformDataColumn = (data) => {
	const name = data.name;
	const id = v4();
	const columns = Object.keys(data)
		.filter((key) => key.startsWith('column'))
		.map((key) => {
			return {
				name: data[key],
				tasks: []
			};
		})
		.filter((column) => column.name !== '');
	return {
		id,
		name,
		columns
	};
};

export const findColumnForName = (board, columnName) => {
	return board.columns.find((column) => column.name === columnName);
};

export const dataToJsonTask = (data) => {
	const title = data.name;
	const description = data.description;
	const status = data.status;
	const subtasks = Object.keys(data)
		.filter((key) => key.startsWith('column'))
		.map((column) => {
			return {
				title: data[column],
				isCompleted: false
			};
		});
	return {
		title,
		description,
		status,
		subtasks
	};
};
export const showToastMessage = (status, message) => {
	switch (status) {
		case SUCCESS:
			toast.success(message, {
				position: toast.POSITION.TOP_RIGHT
			});
			break;
		case ERROR:
			toast.error(message, {
				position: toast.POSITION.TOP_RIGHT
			});
	}
};
