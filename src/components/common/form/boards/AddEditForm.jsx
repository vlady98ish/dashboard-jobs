import React from 'react';
import CustomLabel from '../CustomLabel';
import TextField from '../TextField';
import ColumnsFieldsContainer from '../columns/ColumnsFieldsContainer';
import SecondaryButton from '../../buttons/SecondaryButton';
import PrimaryButton from '../../buttons/PrimaryButton';
import { useForm } from 'react-hook-form';
import { createBoard, updateBoard } from '../../../../utils/Api';
import { useDispatch, useSelector } from 'react-redux';
import { addBoard, editBoard } from '../../../../features/theme/boardSlice';
import {
	transformDataColumn,
	updateSelectedBoard
} from '../../../../utils/helper';
import 'react-toastify/dist/ReactToastify.css';

const AddEditForm = ({
	columns,
	addColumn,
	deleteColumn,
	closeModel,
	editForm = false,
	setColumns
}) => {
	//Get the currently selected board from the Redux store
	const { selectedBoard } = useSelector((state) => state.boards);
	const dispatch = useDispatch();
	const formMethods = useForm();
	const {
		register,
		unregister,
		handleSubmit,
		formState: { errors }
	} = formMethods;

	const onSubmit = async (data) => {
		if (editForm) {
			//If the form is used for editing, update the selected board with the new data
			const updatedBoard = updateSelectedBoard(data, selectedBoard);
			console.log(updatedBoard);
			dispatch(editBoard(updatedBoard));
			await updateBoard(updatedBoard);
		} else {
			//If the form is used for creating a new board, transform the form data to the desired format
			const transformData = transformDataColumn(data);
			dispatch(addBoard(transformData));
			await createBoard(transformData);
		}

		closeModel();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mt-[24px]">
				<CustomLabel htmlFor="nameBoard" text="Name" />
				<TextField
					type="text"
					id="nameBoard"
					name="name"
					placeholder="e.g Web Design"
					register={register}
					required={true}
					errors={errors}
					value={editForm ? selectedBoard.name : ''}
				/>
			</div>
			<div className="mt-[24px]">
				<ColumnsFieldsContainer
					title="Columns"
					columns={columns}
					onColumnChange={deleteColumn}
					register={register}
					typeEdit={editForm}
					setColumns={setColumns}
					unregister={unregister}
				/>
			</div>
			<SecondaryButton
				text="+ Add New Column"
				margin="mt-[18px]"
				onClick={addColumn}
			/>
			<PrimaryButton
				text={editForm ? 'Save Changes' : 'Create New Board'}
				fullWidth={true}
				margin="mt-[24px]"
				paddingY={9}
			/>
		</form>
	);
};

export default AddEditForm;
