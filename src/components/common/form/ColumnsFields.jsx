import React from 'react';
import CustomLabel from './CustomLabel';

import Column from './Column';

const ColumnsFields = ({ columns, onColumnChange, register }) => {
	return (
		<>
			<CustomLabel text="Columns" />
			{columns.map((column) => (
				<Column
					column={column}
					key={column.id}
					onColumnChange={onColumnChange}
					register={register}
				/>
			))}
		</>
	);
};

export default ColumnsFields;
