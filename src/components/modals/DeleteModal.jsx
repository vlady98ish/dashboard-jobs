import React, { useCallback } from 'react';
import ButtonDestructive from '../common/buttons/ButtonDestructive';
import SecondaryButton from '../common/buttons/SecondaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard } from '../../utils/Api';
import { deleteBoardFromSlice } from '../../features/theme/boardSlice';
import ModalWrapper from './ModalWrapper';

const DeleteModal = ({ isOpen, onClose }) => {
	const dispatch = useDispatch();
	const selectedBoard = useSelector((state) => state.boards.selectedBoard);
	const handleDelete = useCallback(
		async (id) => {
			console.log(id);
			await deleteBoard(id);
			dispatch(deleteBoardFromSlice(id));
			onClose();
		},
		[dispatch]
	);
	return (
		<ModalWrapper isOpen={isOpen} onClose={onClose} title="Delete this board?">
			<div className="flex flex-col gap-[24px]">
				<h2 className="font-700 text-18 leading-23 text-red">
					Delete this board?
				</h2>
				<p className="font-500 text-12 leading-23 text-medium_grey">
					Are you sure you want to delete the ‘Platform Launch’ board? This
					action will remove all columns and tasks and cannot be reversed.
				</p>
				<div className="flex gap-[16px]">
					<ButtonDestructive
						text={'Delete'}
						fullWidth={true}
						onClick={async () => {
							await handleDelete(selectedBoard.id);
						}}
					/>
					<SecondaryButton text={'Cancel'} />
				</div>
			</div>
		</ModalWrapper>
	);
};

export default DeleteModal;
