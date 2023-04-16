export const addTaskToColumn = (board, columnName, task) => {
	let column = findColumnForName(board, columnName);
	if (column) {
		column.tasks.push(task);
	}
};

export const transformDataColumn = (data) => {
	const name = data.name;
	const columns = Object.keys(data)
		.filter((key) => key.startsWith('column'))
		.map((key) => {
			return {
				name: data[key],
				tasks: []
			};
		});
	return {
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
	const subTasks = Object.keys(data)
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
		subTasks
	};
};
