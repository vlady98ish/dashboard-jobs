import React from 'react';
import ThreeDots from '../../../assets/icon-vertical-ellipsis.svg';
import DropDownEditDelete from '../../header/DropDownEditDelete';

const DropMenuButton = ({
	setIsEditDeleteOpen,
	isEditDeleteOpen,
	setIsOpen
}) => {
	return (
		<button
			className="flex-shrink-0"
			onClick={() => setIsEditDeleteOpen(!isEditDeleteOpen)}
		>
			<img src={ThreeDots} alt="Three Dots Drop Down Menu" />
			{isEditDeleteOpen && <DropDownEditDelete setIsOpen={setIsOpen} />}
		</button>
	);
};

export default DropMenuButton;
