import React, { useState } from 'react';
import EmptyBoard from './EmptyBoard';
import { useSelector } from 'react-redux';
import ShowSideBar from '../sidebar/ShowSideBar';
import AddEditBoardModal from '../modals/AddEditBoardModal';

import TaskColumnWrapper from './tasks/columns/TaskColumnWrapper';
import TaskInfoModal from '../modals/TaskInfoModal';

const Main = ({ isMobile }) => {
	const isSidebarHidden = useSelector((state) => state.sidebar.hidden);
	const { selectedBoard } = useSelector((state) => state.boards);
	const [isOpen, setIsOpen] = useState(false);
	const [taskIsOpen, setTaskIsOpen] = useState(false);

	return (
		<main
			className={`bg-light_grey h-full  dark:bg-very_dark_grey relative pl-[20px] pt-[24px]
			`}
		>
			{!selectedBoard ? (
				''
			) : selectedBoard.columns.length === 0 ? (
				<>
					<EmptyBoard isMobile={isMobile} />
				</>
			) : (
				//TODO: Edit for edit Modal!
				<TaskColumnWrapper
					columns={selectedBoard.columns}
					setOpen={setTaskIsOpen}
					setOpenEditModal={setIsOpen}
				/>
			)}

			<AddEditBoardModal
				isOpen={isOpen}
				onClose={() => setIsOpen(!isOpen)}
				title="Add New Board"
			/>
			<TaskInfoModal
				isOpen={taskIsOpen}
				onClose={() => setTaskIsOpen(!taskIsOpen)}
			/>
			{isSidebarHidden && <ShowSideBar />}
		</main>
	);
};

export default Main;
