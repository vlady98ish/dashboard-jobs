import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import DeleteModal from '../modals/DeleteModal';
import AddEditTaskModal from '../modals/AddEditTaskModal';

import AddEditBoardModal from '../modals/AddEditBoardModal';
import HeaderTitle from './HeaderTitle';
import HeaderButtons from './HeaderButtons';
import HeaderBottomLine from './HeaderBottomLine';

const Header = ({ isMobile }) => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const { selectedBoard } = useSelector((state) => state.boards);
	const [isEditDeleteOpen, setIsEditDeleteOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenAddTask, setIsOpenAddTask] = useState(false);
	const [editModalOpen, setIsEditModalOpen] = useState(false);

	return (
		// Header container
		<header className="w-full">
			<div className="flex justify-between pt-[29px] pb-[37px] h-[97px] px-[16px] dark:bg-dark_grey items-center md:px-[32px]">
				<HeaderTitle
					isMobile={isMobile}
					selectedBoard={selectedBoard}
					setIsDropDownOpen={setIsDropDownOpen}
					isDropDownOpen={isDropDownOpen}
				/>
				<HeaderButtons
					isMobile={isMobile}
					setIsOpenAddTask={setIsOpenAddTask}
					selectedBoard={selectedBoard}
					setIsOpen={setIsOpen}
					setIsEditDeleteOpen={setIsEditDeleteOpen}
					setIsEditModalOpen={setIsEditModalOpen}
					isEditDeleteOpen={isEditDeleteOpen}
					isOpenAddTask={isOpenAddTask}
				/>
			</div>
			<DeleteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
			<AddEditBoardModal
				isOpen={editModalOpen}
				onClose={() => setIsEditModalOpen(false)}
				title="Edit Board"
				typeEdit={true}
			/>
			<AddEditTaskModal
				isOpen={isOpenAddTask}
				onClose={() => setIsOpenAddTask(false)}
				title="Add Task"
			/>
			<HeaderBottomLine />
		</header>
	);
};

export default Header;
