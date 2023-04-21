import React from 'react';
import TextField from '../TextField';
import CancelIcon from '../../../../assets/icon-cross.svg';

const Column = ({ column, onColumnChange, register, unregister }) => {
	return (
		<div className="flex items-center">
			<TextField
				type="text"
				id={`column${column.id}`}
				name={`column${column.id}`}
				placeholder="e.g. Todo"
				register={register}
				required={false}
				value={column.name}
			/>
			<button
				type="button"
				className="ml-[16px] mt-[12px] inline"
				onClick={() => {
					unregister(`column${column.id}`);
					onColumnChange(column.id);
				}}
			>
				<img src={CancelIcon} alt="Delete Input Field" />
			</button>
		</div>
	);
};

export default Column;