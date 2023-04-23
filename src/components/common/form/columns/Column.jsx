import React from 'react';
import TextField from '../TextField';
import CancelIcon from '../../../../assets/icon-cross.svg';

const Column = ({
	column: { id, name },
	onColumnChange,
	register,
	unregister
}) => {
	return (
		<div className="flex items-center">
			<TextField
				type="text"
				id={`column${id}`}
				name={`column${id}`}
				placeholder="e.g. Todo"
				register={register}
				required={false}
				value={name}
			/>
			<button
				type="button"
				className="ml-[16px] mt-[12px] inline"
				onClick={() => {
					unregister(`column${id}`);
					onColumnChange(id);
				}}
			>
				<img src={CancelIcon} alt="Delete Input Field" />
			</button>
		</div>
	);
};

export default Column;
