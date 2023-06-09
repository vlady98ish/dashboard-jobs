import 'react-toastify/ReactToastify.css';
import { addTaskToColumn, findColumnByName, showToastMessage } from './helper';
import { API_LINK, ERROR, SUCCESS } from './constant';

export const getAllBoards = async () => {
	const res = await fetch(`${API_LINK}`);
	if (!res.ok) {
		throw Error('Could not find the boards');
	}
	return res.json();
};
export const createBoard = async (data) => {
	try {
		const response = await fetch(`${API_LINK}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		await response.json();
		showToastMessage(SUCCESS, 'Board was created');
	} catch (error) {
		showToastMessage(ERROR, `Board didnt created ${error}`);
	}
};

export const deleteBoard = async (boardId) => {
	try {
		const res = await fetch(`${API_LINK}/${boardId}`, {
			method: 'DELETE'
		});
		if (res.ok) {
			showToastMessage(SUCCESS, `Board was deleted`);
		} else {
			showToastMessage(ERROR, `Error deleting item with ID ${boardId}`);
		}
	} catch (error) {
		showToastMessage(ERROR, `Error deleting item with ID ${boardId}: ${error}`);
	}
};

export const getBoard = async (boardId) => {
	const res = await fetch(`${API_LINK}/${boardId}`);
	if (!res.ok) {
		throw Error('Could not find the board');
	}
	return res.json();
};

export const addTask = async (boardId, task) => {
	const columnName = task.status;
	try {
		let board = await getBoard(boardId);
		console.log(`Board: ${board}`);
		let column = findColumnByName(board, columnName);
		addTaskToColumn(column, task);
		await updateBoard(board, true);
	} catch (error) {
		showToastMessage(
			ERROR,
			`Error adding task to board with ID ${boardId}: ${error}`
		);
	}
};

export const updateBoard = async (board, toast = true) => {
	const boardId = board.id;
	try {
		await fetch(`${API_LINK}/${boardId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(board)
		});
		if (toast) {
			showToastMessage(SUCCESS, `Board was updated successfully`);
		}
	} catch (error) {
		showToastMessage(ERROR, `Error update board with id ${boardId}`);
	}
};

export const deleteTask = async (deleteTask, board, toast) => {
	const updatedBoard = JSON.parse(JSON.stringify(board));

	updatedBoard.columns.forEach((column) => {
		column.tasks = column.tasks.filter(
			(task) => task.title !== deleteTask.title
		);
	});
	try {
		await updateBoard(updatedBoard, toast);
		showToastMessage(
			SUCCESS,
			`Task ${deleteTask.title} was deleted successfully`
		);
	} catch (error) {
		showToastMessage(ERROR, `Error deleting task : ${deleteTask.title}`);
	}
};
