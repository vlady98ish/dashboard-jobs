import React from 'react';
import CustomLabel from '../CustomLabel';
import TextField from '../TextField';
import ColumnsFieldsContainer from '../ColumnsFieldsContainer';
import SecondaryButton from '../../buttons/SecondaryButton';
import PrimaryButton from '../../buttons/PrimaryButton';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Description from './Description';
import StatusField from './StatusField';
import { dataToJsonTask } from '../../../../utils/helper';
import { addTask } from '../../../../utils/Api';

const AddEditTask = ({
	subTasks,
	addColumn,
	onColumnChange: deleteColumn,
	closeModel
}) => {
	const formMethods = useForm();
	const { selectedBoard } = useSelector((state) => state.boards);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = formMethods;

	const onSubmit = async (data) => {
		await addTask(selectedBoard.id, dataToJsonTask(data));
		// dispatch(createBoardForSlice(transformData(data)));

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
					register={register}
					required={true}
					errors={errors}
				/>
			</div>
			<div className="mt-[24px]">
				<Description register={register} />
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
				<StatusField register={register} />
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
