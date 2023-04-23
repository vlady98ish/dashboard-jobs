import React from 'react';
import CustomLabel from '../CustomLabel';
import { useSelector } from 'react-redux';
import TextFieldWithDropdown from './TextFieldWithDropDown';

const StatusField = ({ register, value }) => {
	const { columns } = useSelector((state) => state.boards.selectedBoard);
	return (
		<div>
			<CustomLabel text="Status" />
			<TextFieldWithDropdown
				options={columns}
				defaultValue={value ? value : columns[0]}
				register={register}
			/>
		</div>
	);
};

export default StatusField;
