import { setSelectedBoard } from '../features/theme/boardSlice';
import { toggleSideBar } from '../features/theme/layoutSlice';

export const handleClick = (dispatch, id, index) => {
	dispatch(setSelectedBoard(index, id));
};

export const toggleSidebarOnClick = (dispatch) => {
	dispatch(toggleSideBar());
};

export const transformData = (data) => {
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
	return {
		name,
		columns
	};
};

export const handleOverlayClick = (e, onClose) => {
	if (e.target === e.currentTarget) {
		onClose();
	}
};
