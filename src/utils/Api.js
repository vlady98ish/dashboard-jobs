import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { addTaskToColumn } from './helper';

export const getAllBoards = async () => {
	const res = await fetch('http://localhost:3000/boards');
	if (!res.ok) {
		throw Error('Could not find the boards');
	}
	return res.json();
};
export const createBoard = async (data) => {
	try {
		const name = data.name;
		const columns = Object.keys(data)
			.filter((key) => key.startsWith('column'))
			.map((key) => {
				return {
					id: '',
					name: data[key],
					tasks: []
				};
			});
		const result = {
			name,
			columns
		};
		const response = await fetch('http://localhost:3000/boards', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(result)
		});
		const resultRes = await response.json();
		console.log('Success:', resultRes);
	} catch (error) {
		console.error('Error:', error);
	}
};

export const deleteBoard = async (boardId) => {
	try {
		const res = await fetch(`http://localhost:3000/boards/${boardId}`, {
			method: 'DELETE'
		});
		if (res.ok) {
			toast.success(`Board was deleted`);
		} else {
			toast.error(`Error deleting item with ID ${boardId}`);
		}
	} catch (error) {
		toast.error(`Error deleting item with ID ${boardId}: ${error}`);
	}
};

export const getBoard = async (boardId) => {
	const res = await fetch(`http://localhost:3000/boards/${boardId}`);
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

		addTaskToColumn(board, columnName, task);
		await updateBoard(board);
	} catch (error) {
		console.error(`Error adding task to board with ID ${boardId}: ${error}`);
	}
};

export const updateBoard = async (board) => {
	const boardId = board.id;
	try {
		await fetch(`http://localhost:3000/boards/${boardId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(board)
		});
	} catch (error) {
		toast.error(`Error update board with id ${boardId}`);
	}
};
