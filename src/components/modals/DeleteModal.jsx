import React, { useCallback } from 'react';
import ButtonDestructive from '../common/buttons/ButtonDestructive';
import SecondaryButton from '../common/buttons/SecondaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard, deleteTask } from '../../utils/Api';
import {
	deleteBoardFromSlice,
	removeTask
} from '../../features/theme/boardSlice';
import ModalWrapper from './ModalWrapper';

const DeleteModal = ({
	isOpen,
	onClose,
	typeTask = false,
	closeTaskInfoModel
}) => {
	const dispatch = useDispatch();
	const selectedBoard = useSelector((state) => state.boards.selectedBoard);
	const { selectedTask } = useSelector((state) => state.boards);
	const handleDelete = useCallback(
		async (id) => {
			console.log(id);
			await deleteBoard(id);
			dispatch(deleteBoardFromSlice(id));
			onClose();
		},
		[dispatch, onClose]
	);
	const handleDeleteTask = useCallback(
		async (task, board) => {
			await deleteTask(task, board, true);
			dispatch(removeTask());
			closeTaskInfoModel(false);
			onClose();
		},
		[onClose, closeTaskInfoModel]
	);
	return (
		<ModalWrapper isOpen={isOpen} onClose={onClose} title="Delete this board?">
			<div className="flex flex-col gap-[24px] z-500000">
				<h2 className="font-700 text-18 leading-23 text-red">
					{typeTask ? 'Delete this task?' : 'Delete this board?'}
				</h2>
				<p className="font-500 text-12 leading-23 text-medium_grey">
					Are you sure you want to delete the ‘
					{typeTask
						? `${selectedTask.title} task`
						: `${selectedBoard && selectedBoard.name} board`}
					’ This action will remove all columns and tasks and cannot be
					reversed.
				</p>
				<div className="flex gap-[16px]">
					<ButtonDestructive
						text={'Delete'}
						fullWidth={true}
						onClick={async () => {
							if (typeTask) {
								await handleDeleteTask(selectedTask, selectedBoard);
							} else {
								await handleDelete(selectedBoard.id);
							}
						}}
					/>
					<SecondaryButton text={'Cancel'} onClick={onClose} />
				</div>
			</div>
		</ModalWrapper>
	);
};

export default DeleteModal;
