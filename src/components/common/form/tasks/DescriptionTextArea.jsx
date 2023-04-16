import React from 'react';

const DescriptionTextArea = ({ register }) => {
	const style = `border  border-opacity-25 rounded-[4px] w-full border-medium_grey min-h-[135px]
	py-[8px] pl-[16px] pr-[25px] mt-[12px] font-500  text-12 leading-23 placeholder:text-black placeholder:opacity-25 dark:placeholder:text-white `;
	return (
		<textarea
			className={style}
			placeholder="e.g. It’s always good to take a break. This 15 minute break will
recharge the batteries a little."
			{...register('description')}
		></textarea>
	);
};

export default DescriptionTextArea;
