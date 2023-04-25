import React, { useState } from 'react';
import EmptyBoard from './EmptyBoard';
import { useSelector } from 'react-redux';
import ShowSideBar from '../sidebar/ShowSideBar';
import AddEditBoardModal from '../modals/AddEditBoardModal';

import TaskColumnWrapper from './tasks/columns/TaskColumnWrapper';
import TaskInfoModal from '../modals/TaskInfoModal';
import AddEditTaskModal from '../modals/AddEditTaskModal';
import DeleteModal from '../modals/DeleteModal';

const Main = ({ isMobile }) => {
	const isSidebarHidden = useSelector((state) => state.sidebar.hidden);
	const { selectedBoard } = useSelector((state) => state.boards);
	const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
	const [taskInfoModalIsOpen, setTaskInfoModalIsOpen] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [idDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	return (
		<main
			className={`bg-light_grey h-full dark:bg-very_dark_grey relative pl-[20px] pt-[24px] pb-[50px] flex-1 overflow-x-auto
			`}
		>
			{!selectedBoard ? (
				''
			) : selectedBoard.columns.length === 0 ? (
				<>
					<EmptyBoard isMobile={isMobile} />
				</>
			) : (
				<TaskColumnWrapper
					columns={selectedBoard.columns}
					setOpen={setTaskInfoModalIsOpen}
					setOpenEditModal={setIsBoardModalOpen}
					setIsEdit={setIsEdit}
				/>
			)}

			<AddEditBoardModal
				isOpen={isBoardModalOpen}
				onClose={() => setIsBoardModalOpen(!isBoardModalOpen)}
				title={isEdit ? 'Edit Board' : 'Add New Board'}
				typeEdit={isEdit}
			/>
			<TaskInfoModal
				isOpen={taskInfoModalIsOpen}
				onClose={() => setTaskInfoModalIsOpen(false)}
				setIsTaskModalOpen={setIsTaskModalOpen}
				setIsOpen={setIsDeleteModalOpen}
			/>
			<DeleteModal
				isOpen={idDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
				typeTask={true}
				closeTaskInfoModel={setTaskInfoModalIsOpen}
			/>
			<AddEditTaskModal
				isOpen={isTaskModalOpen}
				onClose={() => setIsTaskModalOpen(!isTaskModalOpen)}
				title={'Edit Task'}
				isEdit={true}
			/>
			{isSidebarHidden && <ShowSideBar />}
		</main>
	);
};

export default Main;
