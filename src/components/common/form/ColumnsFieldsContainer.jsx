import React from 'react';
import CustomLabel from './CustomLabel';

import Column from './Column';

const ColumnsFieldsContainer = ({
	title,
	columns,
	onColumnChange,
	register
}) => {
	return (
		<>
			<CustomLabel text={title} />
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

export default ColumnsFieldsContainer;
