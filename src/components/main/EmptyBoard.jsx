import React from 'react';
import PrimaryButton from '../common/buttons/PrimaryButton';

const EmptyBoard = ({ isMobile }) => {
	return (
		// Container for the empty board message and button
		<div className="flex flex-col justify-center items-center h-full p-[16px] md:p-0 ">
			{/* The message displayed when the board is empty */}
			<p className="text-18 leading-23 font-700 text-medium_grey text-center">
				This board is empty. Create a new column to get started
			</p>
			{/* The button to add a new column */}
			<PrimaryButton
				text="+Add New Column"
				paddingX={25}
				paddingY={14}
				margin={isMobile ? 'mt-[25px]' : 'mt-[32px]'}
			/>
		</div>
	);
};

export default EmptyBoard;
