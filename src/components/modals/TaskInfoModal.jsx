import React, { useState } from 'react';
import { handleOverlayClick } from '../../utils/handler';

import Modal from 'react-modal';

import DropMenuButton from '../common/buttons/DropMenuButton';
import CustomLabel from '../common/form/CustomLabel';
import { useDispatch, useSelector } from 'react-redux';
import TextFieldWithDropDown from '../common/form/tasks/TextFieldWithDropDown';
import SubtasksWrapper from '../main/tasks/subtasks/SubtasksWrapper';
import { updateSelectedTask } from '../../features/theme/boardSlice';

const TaskInfoModal = ({ isOpen, setIsOpen, onClose, setIsTaskModalOpen }) => {
	const { selectedBoard } = useSelector((state) => state.boards);
	const { selectedTask } = useSelector((state) => state.boards);
	const [isEditDeleteOpen, setIsEditDeleteOpen] = useState(false);
	const dispatch = useDispatch();
	const updateStatus = (status) => {
		console.log(status);
		dispatch(updateSelectedTask(status));
	};

	return (
		<Modal
			isOpen={isOpen}
			overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
			className="h-fit w-full sm:max-w-[343px] bg-white  rounded-[6px]  dark:bg-dark_grey md:p-[32px]  md:max-w-[480px] focus:outline-none"
			onRequestClose={(e) => handleOverlayClick(e, onClose)}
			ariaHideApp={false}
		>
			<div className="flex flex-col gap-[24px]">
				<div className="flex flex-row gap-[24px] items-center">
					<h2 className="font-700 text-18 leading-23 w-full">
						{selectedTask.title}
					</h2>
					<DropMenuButton
						setIsEditDeleteOpen={setIsEditDeleteOpen}
						isEditDeleteOpen={isEditDeleteOpen}
						setIsOpen={setIsOpen}
						setEditModalOpen={setIsTaskModalOpen}
						titles={['Edit task', 'Delete task']}
					/>
				</div>
				<p className="font-500 text-12 leading-23 text-medium_grey">
					{selectedTask.description}
				</p>
				<div>
					<CustomLabel text="Subtasks (2 of 3)" />
					<SubtasksWrapper subtasks={selectedTask.subtasks} />
					<div className="flex flex-col mt-[24px]">
						<CustomLabel text={'Current Status'} />
						<TextFieldWithDropDown
							onChange={updateStatus}
							options={selectedBoard && selectedBoard.columns}
							defaultValue={selectedTask.status}
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default TaskInfoModal;
