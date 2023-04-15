import React, { useCallback } from 'react';
import Modal from 'react-modal';
import ButtonDestructive from '../common/buttons/ButtonDestructive';
import SecondaryButton from '../common/buttons/SecondaryButton';
import { handleOverlayClick } from '../../utils/handler';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard } from '../../utils/CRUD';
import { deleteBoardFromSlice } from '../../features/theme/boardSlice';

const DeleteModal = ({ isOpen, onClose }) => {
	const dispatch = useDispatch();
	const selectedBoard = useSelector((state) => state.boards.selectedBoard);
	const handleDelete = useCallback(
		async (id) => {
			await deleteBoard(id);
			dispatch(deleteBoardFromSlice(id));
			onClose();
		},
		[dispatch]
	);
	return (
		<Modal
			isOpen={isOpen}
			overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
			className="h-fit w-full sm:max-w-[343px] bg-white  rounded-[6px]  dark:bg-dark_grey md:p-[32px]  md:max-w-[480px] focus:outline-none"
			onRequestClose={(e) => handleOverlayClick(e, onClose)}
			ariaHideApp={false}
		>
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
		</Modal>
	);
};

export default DeleteModal;
