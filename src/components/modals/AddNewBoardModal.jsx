import React, { useCallback, useState } from 'react';
import AddEditForm from '../common/form/boards/AddEditForm';
import ModalWrapper from './ModalWrapper';
import { useSelector } from 'react-redux';

const AddNewBoardModal = ({ isOpen, onClose, title, typeEdit = false }) => {
	const [columns, setColumns] = useState([{ id: 1 }]);
	const selectedBoard = useSelector((state) => state.boards.selectedBoard);
	const addColumn = useCallback(
		(e) => {
			e.preventDefault();
			setColumns([...columns, { id: columns.length + 1 }]);
		},
		[columns]
	);
	const deleteColumn = useCallback((id) => {
		setColumns((prevState) => prevState.filter((column) => column.id !== id));
	}, []);

	return (
		<ModalWrapper isOpen={isOpen} onClose={onClose}>
			<h2 className="font-700 lg:text-18 lg:leading-23 dark:text-white ">
				{title}
			</h2>
			<AddEditForm
				columns={typeEdit ? selectedBoard.columns : columns}
				onColumnChange={deleteColumn}
				addColumn={addColumn}
				closeModel={onClose}
				editForm={typeEdit}
			/>
		</ModalWrapper>
	);
};

export default AddNewBoardModal;
