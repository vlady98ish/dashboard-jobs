import React, { useState } from 'react';

import PrimaryButton from '../common/buttons/PrimaryButton';

import MobileLogo from '../../assets/logo-mobile.svg';
import PlusTask from '../../assets/icon-add-task-mobile.svg';
import ArrowDown from '../../assets/icon-chevron-down.svg';
import ArrowUp from '../../assets/icon-chevron-up.svg';
import DropDownMenu from './DropDownMenu';
import { useSelector } from 'react-redux';

import DeleteModal from '../modals/DeleteModal';
import AddEditTaskModal from '../modals/AddEditTaskModal';
import DropMenuButton from '../common/buttons/DropMenuButton';
import AddEditBoardModal from '../modals/AddEditBoardModal';

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
			{/* Header content */}
			<div
				className="flex justify-between pt-[29px] pb-[37px] h-[97px] px-[16px] dark:bg-dark_grey items-center
        md:px-[32px]
      "
			>
				{/* Header title */}
				<div className={isMobile ? `flex gap-[16px]` : ``}>
					{isMobile && <img src={MobileLogo} alt="Logo" />}
					<h1
						className="text-black font-700 dark:text-white md:text-24 md:leading-30
          text-18 leading-23"
					>
						{selectedBoard ? selectedBoard.name : 'Select Board'}
					</h1>
					{isMobile && (
						<button
							onClick={() => {
								setIsDropDownOpen(!isDropDownOpen);
							}}
						>
							<img
								src={isDropDownOpen ? ArrowUp : ArrowDown}
								alt="Drop Down Menu"
							/>
						</button>
					)}

					{isDropDownOpen && isMobile && <DropDownMenu />}
				</div>
				{/* Header buttons */}
				<div className="flex items-center">
					{/* Add new task button */}
					<PrimaryButton
						text={
							isMobile ? (
								<img src={PlusTask} alt="Add Task" />
							) : (
								'+ Add New Task'
							)
						}
						margin={isMobile ? 'mr-[16px]' : 'mr-[24px]'}
						paddingX={25}
						paddingY={14}
						onClick={() => setIsOpenAddTask(!isOpenAddTask)}
						disabled={selectedBoard === null}
					/>
					{/* Three dots dropdown menu button */}
					<DropMenuButton
						setIsOpen={setIsOpen}
						isEditDeleteOpen={isEditDeleteOpen}
						setIsEditDeleteOpen={setIsEditDeleteOpen}
						setEditModalOpen={setIsEditModalOpen}
					/>
				</div>
				<DeleteModal
					isOpen={isOpen}
					onClose={() => {
						setIsOpen(false);
					}}
				/>
				<AddEditBoardModal
					isOpen={editModalOpen}
					onClose={() => {
						setIsEditModalOpen(false);
					}}
					title="Edit Board"
					typeEdit={true}
				/>
			</div>
			<AddEditTaskModal
				isOpen={isOpenAddTask}
				onClose={() => {
					setIsOpenAddTask(false);
				}}
			/>
			{/*Header bottom line*/}
			<div className="h-[1.5px] bg-lines_light dark:bg-lines_dark md:block" />
		</header>
	);
};

export default Header;
