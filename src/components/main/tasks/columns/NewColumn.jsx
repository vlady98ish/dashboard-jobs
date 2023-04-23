import React from 'react';

const NewColumn = ({ setOpenEditModal, setIsEdit }) => {
	return (
		<div className="w-[280px] text-medium_grey flex flex-col rounded-[6px] bg-add_column_light justify-center items-center cursor-pointer dark:bg-add_column_dark hover:text-main_purple ">
			<button
				className=" font-700 text-24 leading-30 w-full h-full"
				onClick={() => {
					setIsEdit(true);
					setOpenEditModal(true);
				}}
			>
				+ New Column
			</button>
		</div>
	);
};

export default NewColumn;
