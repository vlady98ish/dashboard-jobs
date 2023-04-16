import { setSelectedBoard } from '../features/theme/boardSlice';
import { toggleSideBar } from '../features/theme/layoutSlice';

export const handleClick = (dispatch, id) => {
	dispatch(setSelectedBoard(id));
};

export const toggleSidebarOnClick = (dispatch) => {
	dispatch(toggleSideBar());
};

export const handleOverlayClick = (e, onClose) => {
	if (e.target === e.currentTarget) {
		onClose();
	}
};
