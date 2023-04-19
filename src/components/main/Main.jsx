import React, { useState } from 'react';
import EmptyBoard from './EmptyBoard';
import { useSelector } from 'react-redux';
import ShowSideBar from '../sidebar/ShowSideBar';
import AddNewBoardModal from '../modals/AddNewBoardModal';

import TaskColumnWrapper from './tasks/TaskColumnWrapper';
import TaskInfoModal from '../modals/TaskInfoModal';

const Main = ({ isMobile }) => {
	const isSidebarHidden = useSelector((state) => state.sidebar.hidden);
	const { selectedBoard } = useSelector((state) => state.boards);
	let isEmpty = !selectedBoard || selectedBoard.columns.length === 0;
	const [isOpen, setIsOpen] = useState(false);
	const [taskIsOpen, setTaskIsOpen] = useState(false);
	const [editIsOpen, setEditIsOpen] = useState(false);
	return (
		<main
			className={`bg-light_grey h-full  dark:bg-very_dark_grey relative pl-[20px] pt-[24px]
			`}
		>
			{isEmpty ? (
				<>
					<EmptyBoard isMobile={isMobile} onClick={setEditIsOpen} />
					<AddNewBoardModal
						isOpen={editIsOpen}
						onClose={() => setEditIsOpen(!editIsOpen)}
						title="Edit Board"
					/>
				</>
			) : (
				<TaskColumnWrapper
					columns={selectedBoard.columns}
					setOpen={setTaskIsOpen}
				/>
			)}
			<AddNewBoardModal
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
