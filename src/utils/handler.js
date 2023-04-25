import { setSelectedBoard } from '../redux/slices/boardSlice';
import { toggleSideBar } from '../redux/slices/layoutSlice';

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
