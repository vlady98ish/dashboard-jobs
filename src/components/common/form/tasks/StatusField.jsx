import React from 'react';
import CustomLabel from '../CustomLabel';
import TextField from '../TextField';
import { useSelector } from 'react-redux';
import TextFieldWithDropdown from './TextFieldWithDropDown';

const StatusField = () => {
	const { columns } = useSelector((state) => state.boards.selectedBoard);
	return (
		<div>
			<CustomLabel text="Status" />
			<TextFieldWithDropdown options={columns} value={columns[0]} />
		</div>
	);
};

export default StatusField;
