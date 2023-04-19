import React, { useCallback, useState } from 'react';
import AddEditForm from '../common/form/boards/AddEditForm';
import ModalWrapper from './ModalWrapper';

const AddNewBoardModal = ({ isOpen, onClose, title }) => {
	const [columns, setColumns] = useState([{ id: 1 }]);

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
				columns={columns}
				onColumnChange={deleteColumn}
				addColumn={addColumn}
				closeModel={onClose}
			/>
		</ModalWrapper>
	);
};

export default AddNewBoardModal;
