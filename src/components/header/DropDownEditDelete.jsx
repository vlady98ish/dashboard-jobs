import React from 'react';

const DropDownEditDelete = ({ setIsOpen, setEditModalOpen, titles }) => {
	return (
		<div className="relative">
			<ul
				className="absolute -right-3 top-9 z-50 bg-white rounded-[8px] shadow-drop flex flex-col items-start
				font-500 text-12 leading-23  py-[16px] gap-[16px] pl-[16px] pr-[] w-[192px] dark:bg-very_dark_grey
			"
			>
				<li className="text-medium_grey" onClick={() => setEditModalOpen(true)}>
					{titles[0]}
				</li>
				<li className="text-red" onClick={() => setIsOpen(true)}>
					{titles[1]}
				</li>
			</ul>
		</div>
	);
};

export default DropDownEditDelete;
