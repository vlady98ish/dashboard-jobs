import React from 'react';
import ThreeDots from '../../../assets/icon-vertical-ellipsis.svg';
import DropDownEditDelete from '../../header/DropDownEditDelete';
import { useSelector } from 'react-redux';

const DropMenuButton = ({
	setIsEditDeleteOpen,
	isEditDeleteOpen,
	setIsOpen,
	setEditModalOpen,
	titles
}) => {
	const { selectedBoard } = useSelector((state) => state.boards);
	const handleClick = () => {
		if (selectedBoard) {
			setIsEditDeleteOpen(!isEditDeleteOpen);
		}
	};
	return (
		<button
			className="flex-shrink-0"
			onClick={handleClick}
			disabled={!selectedBoard}
		>
			<img src={ThreeDots} alt="Three Dots Drop Down Menu" />
			{isEditDeleteOpen && (
				<DropDownEditDelete
					setIsOpen={setIsOpen}
					setEditModalOpen={setEditModalOpen}
					titles={titles}
				/>
			)}
		</button>
	);
};

export default DropMenuButton;
