import React, { useCallback, useEffect, useState } from 'react';
import AddEditForm from '../common/form/boards/AddEditForm';
import ModalWrapper from './ModalWrapper';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

const AddEditBoardModal = ({ isOpen, onClose, title, typeEdit = false }) => {
	const { selectedBoard } = useSelector((state) => state.boards);
	const [columns, setColumns] = useState([]);
	const addColumn = useCallback(
		(e) => {
			e.preventDefault();
			setColumns([...columns, { id: v4() }]);
		},
		[columns]
	);
	const deleteColumn = useCallback(
		(id) => {
			setColumns((prevState) => prevState.filter((column) => column.id !== id));
		},
		[setColumns]
	);

	const updateColumns = useCallback(() => {
		if (typeEdit && selectedBoard) {
			setColumns(
				selectedBoard.columns.map((col) => {
					return { ...col, id: v4() };
				})
			);
		}
	}, [selectedBoard]);

	useEffect(() => {
		updateColumns();
	}, [updateColumns]);
	return (
		<ModalWrapper isOpen={isOpen} onClose={onClose}>
			<h2 className="font-700 lg:text-18 lg:leading-23 dark:text-white ">
				{title}
			</h2>
			<AddEditForm
				columns={columns}
				deleteColumn={deleteColumn}
				addColumn={addColumn}
				closeModel={onClose}
				editForm={typeEdit}
			/>
		</ModalWrapper>
	);
};

export default AddEditBoardModal;
