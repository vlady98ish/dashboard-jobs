import React from 'react';
import uniqolor from 'uniqolor';

const StatusTask = ({ status, size }) => {
	const color = uniqolor(status).color;
	return (
		<div className="flex flex-row gap-[12px] items-center">
			<div
				className={`w-[15px] h-[15px]`}
				style={{ backgroundColor: color, borderRadius: '50%' }}
			></div>
			<h2 className="font-700 text-12 leading-15 tracking-2.4 text-medium_grey">
				{status} ({size})
			</h2>
		</div>
	);
};

export default StatusTask;
