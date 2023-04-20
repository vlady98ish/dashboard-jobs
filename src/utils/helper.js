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
