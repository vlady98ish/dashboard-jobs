import React, { useState } from 'react';
import CustomLabel from '../CustomLabel';
import TextField from '../TextField';
import ColumnsFieldsContainer from '../ColumnsFieldsContainer';
import SecondaryButton from '../../buttons/SecondaryButton';
import PrimaryButton from '../../buttons/PrimaryButton';
import { useForm } from 'react-hook-form';
import { createBoard } from '../../../../utils/Api';
import { useDispatch } from 'react-redux';
import { createBoardForSlice } from '../../../../features/theme/boardSlice';
import { transformDataColumn } from '../../../../utils/helper';

const AddEditForm = ({
	columns,
	addColumn,
	onColumnChange: deleteColumn,
	closeModel
}) => {
	const dispatch = useDispatch();
	const formMethods = useForm();
	const [name, setName] = useState('');
	const handleChange = ({ target: { value } }) => setName(value);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = formMethods;

	const onSubmit = async (data) => {
		dispatch(createBoardForSlice(transformDataColumn(data)));
		await createBoard(data);
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
					onChange={handleChange}
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
