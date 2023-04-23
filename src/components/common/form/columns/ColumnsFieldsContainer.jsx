import React from 'react';
import CustomLabel from '../CustomLabel';

import Column from './Column';
import { v4 } from 'uuid';

const ColumnsFieldsContainer = ({
	title,
	columns,
	onColumnChange,
	register,
	unregister,
	typeEdit
}) => {
	return (
		<>
			<CustomLabel text={title} />
			{columns.map((column) => (
				<Column
					column={column}
					key={v4()}
					onColumnChange={onColumnChange}
					register={register}
					unregister={unregister}
					isEdit={typeEdit}
				/>
			))}
		</>
	);
};

export default ColumnsFieldsContainer;
