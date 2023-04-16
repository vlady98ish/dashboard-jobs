import React from 'react';

const PrimaryButton = ({
	text,
	margin,
	paddingX,
	paddingY,
	fullWidth = false,
	onClick,
	disabled = false
}) => {
	const normalStyle = `bg-main_purple rounded-[24px] submit ${margin} px-[${paddingX}px] py-[${paddingY}px] ${
		fullWidth && 'w-full'
	}`;
	const hoverStyle = `hover:bg-main_purple_hover `;
	const disabledStyle = `bg-opacity-25 cursor-not-allowed`;
	return (
		<button
			className={`${normalStyle} ${!disabled && hoverStyle} ${
				disabled && disabledStyle
			}`}
			onClick={onClick}
			disabled={disabled}
		>
			<span className="font-700 text-15 leading-19 text-white">{text}</span>
		</button>
	);
};

export default PrimaryButton;
