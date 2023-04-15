import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

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

export const deleteBoard = async (id) => {
	try {
		const res = await fetch(`http://localhost:3000/boards/${id}`, {
			method: 'DELETE'
		});
		if (res.ok) {
			toast.success(`Board was deleted`);
		} else {
			toast.error(`Error deleting item with ID ${id}`);
		}
	} catch (error) {
		toast.error(`Error deleting item with ID ${id}: ${error}`);
	}
};
