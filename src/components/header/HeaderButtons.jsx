import React from 'react';
import PrimaryButton from '../common/buttons/PrimaryButton';
import DropMenuButton from '../common/buttons/DropMenuButton';
import PlusTask from '../../assets/icon-add-task-mobile.svg';

const HeaderButtons = ({
	                       isMobile,
	                       setIsOpenAddTask,
	                       selectedBoard,
	                       setIsOpen,
	                       setIsEditDeleteOpen,
	                       setIsEditModalOpen,
	                       isOpenAddTask,
	                       isEditDeleteOpen
                       }) => {
	return (
		<div className="flex items-center">
			<PrimaryButton
				text={
					isMobile ? <img src={PlusTask} alt="Add Task" /> : '+ Add New Task'
				}
				margin={isMobile ? 'mr-[16px]' : 'mr-[24px]'}
				paddingX={25}
				paddingY={14}
				onClick={() => setIsOpenAddTask(!isOpenAddTask)}
				disabled={selectedBoard === null}
			/>
			<DropMenuButton
				setEditModalOpen={setIsEditModalOpen}
				setIsOpen={setIsOpen}
				isEditDeleteOpen={isEditDeleteOpen}
				setIsEditDeleteOpen={setIsEditDeleteOpen}
				titles={['Edit Board', 'Delete Board']}
			/>
		</div>
	);
};

export default HeaderButtons;
