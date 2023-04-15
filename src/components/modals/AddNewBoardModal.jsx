import React, { useState } from 'react';
import Modal from 'react-modal';

import AddEditForm from '../common/form/AddEditForm';
import { handleOverlayClick } from '../../utils/handler';

const AddNewBoardModal = ({ isOpen, onClose }) => {
	const [columns, setColumns] = useState([{ id: 1 }]);

	const addColumn = (e) => {
		e.preventDefault();
		setColumns([...columns, { id: columns.length + 1 }]);
	};
	const deleteColumn = (id) => {
		setColumns((prevState) => prevState.filter((column) => column.id !== id));
	};

	return (
		<Modal
			isOpen={isOpen}
			overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
			className="h-fit w-full sm:max-w-[343px] bg-white  rounded-[6px]  dark:bg-dark_grey md:p-[32px]  md:max-w-[480px] focus:outline-none"
			onRequestClose={(e) => handleOverlayClick(e, onClose)}
			ariaHideApp={false}
		>
			<div className="flex flex-col">
				<h2 className="font-700 lg:text-18 lg:leading-23 dark:text-white ">
					Add New Board
				</h2>
				<AddEditForm
					columns={columns}
					onColumnChange={deleteColumn}
					addColumn={addColumn}
					closeModel={onClose}
				/>
			</div>
		</Modal>
	);
};

export default AddNewBoardModal;
