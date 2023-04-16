import React from 'react';

const ButtonDestructive = ({ text, fullWidth = false, onClick }) => {
	const normalStyle = `bg-red rounded-[20px] text-white px-[8px] py-[8px] ${
		fullWidth && 'w-full'
	}`;
	const hoverStyle = `hover:bg-red-hover`;
	return (
		<button className={`${normalStyle} ${hoverStyle}`} onClick={onClick}>
			<span className="font-700 text-13 leading-23 text-white">{text}</span>
		</button>
	);
};

export default ButtonDestructive;
