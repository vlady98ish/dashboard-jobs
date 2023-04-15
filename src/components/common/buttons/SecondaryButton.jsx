import React from 'react';

const SecondaryButton = ({ text, margin, onClick }) => {
	const normalStyle = `bg-main_purple bg-opacity-10 rounded-[20px] text-main_purple py-[9px] w-full ${margin} dark:bg-white`;
	const hoverStyle = `hover: bg-opacity-25`;
	return (
		<button className={`${normalStyle} ${hoverStyle} `} onClick={onClick}>
			<span className="font-700 text-13 leading-23">{text}</span>
		</button>
	);
};

export default SecondaryButton;
