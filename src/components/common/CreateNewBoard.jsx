import React from 'react';
import IconBoardPurple from '../../assets/icon-board-purple.svg';

const CreateNewBoard = ({ setIsOpen }) => {
	const hoverStyle = `hover:bg-main_purple rounded-r-[100px] hover:bg-opacity-10 hover:text-main_purple dark:hover:bg-white`;

	return (
		<div
			className={`flex items-center justify-start gap-4
         cursor-pointer py-[15px] py-[15px] lg:pl-8 pl-[24px] ${hoverStyle}`}
			onClick={() => setIsOpen(true)}
		>
			<img src={IconBoardPurple} alt="Icon Board" />
			<span className="text-main_purple text-15 leading-19 font-700">
				+ Create New Board
			</span>
		</div>
	);
};

export default CreateNewBoard;
