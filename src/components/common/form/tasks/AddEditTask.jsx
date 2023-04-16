import React, { useState } from 'react';
import CustomLabel from '../CustomLabel';
import TextField from '../TextField';
import ColumnsFieldsContainer from '../ColumnsFieldsContainer';
import SecondaryButton from '../../buttons/SecondaryButton';
import PrimaryButton from '../../buttons/PrimaryButton';
import { useForm } from 'react-hook-form';
import { createBoard } from '../../../../utils/CRUD';
import { useDispatch } from 'react-redux';
import { createBoardForSlice } from '../../../../features/theme/boardSlice';
import { transformData } from '../../../../utils/handler';
import Description from './Description';
import StatusField from './StatusField';

const AddEditTask = ({
	subTasks,
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
		dispatch(createBoardForSlice(transformData(data)));
		await createBoard(data);
		closeModel();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mt-[24px]">
				<CustomLabel htmlFor="titleBoard" text="Title" />
				<TextField
					type="text"
					id="titleBoard"
					name="name"
					placeholder="e.g Take coffee break"
					onChange={handleChange}
					register={register}
					required={true}
					errors={errors}
				/>
			</div>
			<div className="mt-[24px]">
				<Description />
			</div>
			<div className="mt-[24px]">
				<ColumnsFieldsContainer
					title="Subtasks"
					columns={subTasks}
					onColumnChange={deleteColumn}
					register={register}
				/>
			</div>
			<SecondaryButton
				text="+ Add New Subtask"
				margin="mt-[18px]"
				onClick={addColumn}
			/>
			<div className="mt-[24px]">
				<StatusField />
			</div>

			<PrimaryButton
				text="Create Task"
				fullWidth={true}
				margin="mt-[24px]"
				paddingY={9}
			/>
		</form>
	);
};

export default AddEditTask;
