import React from 'react';
import { handleOverlayClick } from '../../utils/handler';

import Modal from 'react-modal';

import DropMenuButton from '../common/buttons/DropMenuButton';
import CustomLabel from '../common/form/CustomLabel';
import { useSelector } from 'react-redux';
import TextFieldWithDropDown from '../common/form/tasks/TextFieldWithDropDown';
import SubtasksWrapper from '../main/tasks/subtasks/SubtasksWrapper';

const TaskInfoModal = ({ isOpen, onClose }) => {
	const { selectedBoard } = useSelector((state) => state.boards);
	const { selectedTask } = useSelector((state) => state.boards);
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
					<DropMenuButton />
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
