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

	return (
		<button
			className="flex-shrink-0"
			onClick={() => {
				if (selectedBoard) {
					setIsEditDeleteOpen(!isEditDeleteOpen);
				}
			}}
			disabled={selectedBoard === null}
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
