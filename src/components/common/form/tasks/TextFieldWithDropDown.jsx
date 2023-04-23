import React from 'react';

const TextFieldWithDropdown = ({
	options,
	onChange,
	register = null,
	defaultValue
}) => {
	const selectProps = register ? { ...register('status') } : {};
	const style = `border  border-opacity-25 rounded-[4px] w-full border-medium_grey
	py-[8px] px-[16px] mt-[12px] font-500  text-12 leading-23 placeholder:text-black  dark:placeholder:text-white`;
	return (
		<div className="w-full">
			<select
				defaultValue={defaultValue}
				onChange={(event) => onChange(event.target.value)}
				className={style}
				{...selectProps}
			>
				{options.map((option, index) => (
					<option
						key={index}
						value={option.value}
						className="text-medium_grey dark:bg-very_dark_grey"
					>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default TextFieldWithDropdown;
