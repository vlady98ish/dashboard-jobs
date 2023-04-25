import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import DeleteModal from '../modals/DeleteModal';
import AddEditTaskModal from '../modals/AddEditTaskModal';

import AddEditBoardModal from '../modals/AddEditBoardModal';
import HeaderTitle from './HeaderTitle';
import HeaderButtons from './HeaderButtons';
import HeaderBottomLine from './HeaderBottomLine';
import Logo from '../sidebar/Logo';
import HeaderLine from './HeaderLine';

const Header = ({ isMobile }) => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const { selectedBoard } = useSelector((state) => state.boards);
	const [isEditDeleteOpen, setIsEditDeleteOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenAddTask, setIsOpenAddTask] = useState(false);
	const [editModalOpen, setIsEditModalOpen] = useState(false);
	const [addBoardModalOpen, setAddBoardModalOpen] = useState(false);
	const handleClose = () => {
		if (addBoardModalOpen) {
			setAddBoardModalOpen(false);
		} else {
			setIsEditModalOpen(false);
		}
	};

	return (
		// Header container
		<header className="w-full dark:bg-dark_grey">
			<div className="flex pl-[16px] md:pl-[26px] lg:pl-[34px]">
				{!isMobile && (
					<>
						<Logo /> <HeaderLine />
					</>
				)}

				<div className="flex-1">
					<div className="flex justify-between  items-center py-[16px] md:pt-[20px] md:pb-[28px] pr-[16px] md:pr-[24px] lg:pr-[32px]">
						<HeaderTitle
							isMobile={isMobile}
							selectedBoard={selectedBoard}
							setIsDropDownOpen={setIsDropDownOpen}
							isDropDownOpen={isDropDownOpen}
							setAddBoardModalOpen={setAddBoardModalOpen}
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
					<HeaderBottomLine />
				</div>
			</div>

			<DeleteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
			<AddEditBoardModal
				isOpen={addBoardModalOpen || editModalOpen}
				onClose={() => handleClose()}
				title={editModalOpen ? 'Edit Board' : 'Add New Board'}
				typeEdit={editModalOpen}
			/>
			<AddEditTaskModal
				isOpen={isOpenAddTask}
				onClose={() => setIsOpenAddTask(false)}
				title="Add Task"
			/>
			{isMobile && <HeaderBottomLine />}
		</header>
	);
};

export default Header;
