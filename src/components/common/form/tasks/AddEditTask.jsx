import React from 'react';
import CustomLabel from '../CustomLabel';
import TextField from '../TextField';
import ColumnsFieldsContainer from '../columns/ColumnsFieldsContainer';
import SecondaryButton from '../../buttons/SecondaryButton';
import PrimaryButton from '../../buttons/PrimaryButton';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Description from './Description';
import StatusField from './StatusField';
import { dataToJsonTask } from '../../../../utils/helper';
import { addTask, deleteTask } from '../../../../utils/Api';
import { updateSelectedTask } from '../../../../redux/slices/boardSlice';

const AddEditTask = ({
	                     subTasks,
	                     addColumn,
	                     onColumnChange: deleteColumn,
	                     closeModel,
	                     editForm
                     }) => {
	const formMethods = useForm();
	const { selectedBoard } = useSelector((state) => state.boards);
	const dispatch = useDispatch();
	const { selectedTask } = useSelector((state) => state.boards);
	const {
		register,
		unregister,
		handleSubmit,
		formState: { errors }
	} = formMethods;
	
	const onSubmit = async (data) => {
		
		await deleteTask(dataToJsonTask(data), selectedBoard, false);
		await addTask(selectedBoard.id, dataToJsonTask(data));
		dispatch(updateSelectedTask(dataToJsonTask(data)));
		//TODO: ADD TASK TO STORE
		
		
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
					value={editForm ? selectedTask.title : ''}
				/>
			</div>
			<div className="mt-[24px]">
				<Description
					register={register}
					value={editForm ? selectedTask.description : ''}
				/>
			</div>
			<div className="mt-[24px]">
				<ColumnsFieldsContainer
					title="Subtasks"
					columns={subTasks}
					onColumnChange={deleteColumn}
					register={register}
					unregister={unregister}
					typeEdit={editForm}
				/>
			</div>
			<SecondaryButton
				text="+ Add New Subtask"
				margin="mt-[18px]"
				onClick={addColumn}
			/>
			<div className="mt-[24px]">
				<StatusField register={register} value={selectedTask.status} />
			</div>
			
			<PrimaryButton
				text={editForm ? 'Save Changes' : 'Create New Task'}
				fullWidth={true}
				margin="mt-[24px]"
				paddingY={9}
			/>
		</form>
	);
};

export default AddEditTask;
