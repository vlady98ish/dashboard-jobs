import React from 'react';
import CustomLabel from '../CustomLabel';
import TextField from '../TextField';
import ColumnsFieldsContainer from '../ColumnsFieldsContainer';
import SecondaryButton from '../../buttons/SecondaryButton';
import PrimaryButton from '../../buttons/PrimaryButton';
import { useForm } from 'react-hook-form';
import { createBoard } from '../../../../utils/Api';
import { useDispatch, useSelector } from 'react-redux';
import { createBoardForSlice } from '../../../../features/theme/boardSlice';
import {
	showToastMessage,
	transformDataColumn
} from '../../../../utils/helper';
import 'react-toastify/dist/ReactToastify.css';

const AddEditForm = ({
	columns,
	addColumn,
	onColumnChange: deleteColumn,
	closeModel
}) => {
	const dispatch = useDispatch();
	const formMethods = useForm();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = formMethods;

	const onSubmit = async (data) => {
		const transformData = transformDataColumn(data);
		dispatch(createBoardForSlice(transformData));
		await createBoard(transformData);
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
				/>
			</div>
			<div className="mt-[24px]">
				<ColumnsFieldsContainer
					title="Columns"
					columns={columns}
					onColumnChange={deleteColumn}
					register={register}
				/>
			</div>
			<SecondaryButton
				text="+ Add New Column"
				margin="mt-[18px]"
				onClick={addColumn}
			/>
			<PrimaryButton
				text="Create New Board"
				fullWidth={true}
				margin="mt-[24px]"
				paddingY={9}
			/>
		</form>
	);
};

export default AddEditForm;
