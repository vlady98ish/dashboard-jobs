import { toast } from 'react-toastify';
import { ERROR, SUCCESS } from './constant';
import { v4 } from 'uuid';
import subtask from '../components/main/tasks/subtasks/Subtask';

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

export const updateSelectedBoard = (data, board) => {
	let columns = Object.keys(data)
		.filter((key) => key.startsWith('column'))
		.map((key) => {
			return {
				name: data[key]
			};
		});
	let updatedBoard = JSON.parse(JSON.stringify(board));
	let boardColumns = updatedBoard.columns;
	let columnsName = columns.map((column) => column.name);
	// Case 1: columns size == boardColumns size
	if (columns.length === boardColumns.length) {
		boardColumns.forEach((column, index) => {
			column.name = columnsName[index];
		});
	}

	// Case 2: columns size < boardColumns size
	else if (columns.length < boardColumns.length) {
		boardColumns.forEach((column, index) => {
			column.name = columnsName[index];
		});
		boardColumns.splice(columns.length);
	}

	// Case 3: columns size > boardColumns size
	else {
		columns.forEach((column, index) => {
			if (index < boardColumns.length) {
				boardColumns[index].name = column.name;
			} else {
				boardColumns.push({ name: column.name, tasks: [] });
			}
		});
	}
	return updatedBoard;
};

export const findColumnByName = (board, columnName) => {
	return board.columns.find((column) => column.name === columnName);
};

export const removeTaskFromColumn = (column, taskTitle) => {
	column.tasks = column.tasks.filter((task) => task.title !== taskTitle);
};

export const addTaskToColumn = (column, task) => {
	column.tasks.push(task);
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
			break;
		default:
			return;
	}
};

export const findTaskByTitle = (column, title) => {
	return column.tasks.find((task) => task.title === title);
};
export const findSubtaskByTitle = (task, title) => {
	return task.subtasks.find((subtask) => subtask.title === title);
};

export const updateTaskInBoard = (task, board, subtask) => {
	const boardToUpdate = JSON.parse(JSON.stringify(board));
	const column = findColumnByName(boardToUpdate, task.status);
	let taskToUpdate = findTaskByTitle(column, task.title);
	let subtaskToUpdate = findSubtaskByTitle(taskToUpdate, subtask.title);
	subtaskToUpdate.isCompleted = subtask.isCompleted;

	return boardToUpdate;
};
