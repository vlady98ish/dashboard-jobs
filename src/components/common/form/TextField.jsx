import React from 'react';

const TextField = ({
	type,
	id,
	name,
	placeholder,
	onChange: onInputChange,
	register,
	required,
	errors
}) => {
	const style = `border ${
		errors && errors[name] && `border-red border-opacity-100 focus:outline-red`
	} border-opacity-25 rounded-[4px] w-full border-medium_grey
	py-[8px] px-[16px] mt-[12px] font-500  text-12 leading-23 placeholder:text-black placeholder:opacity-25 dark:placeholder:text-white`;

	return (
		<div className={`${errors && 'relative '} w-full`}>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				{...register(name, { required })}
				className={style}
				onChange={onInputChange}
			/>
			{errors && errors[name] && (
				<div className="absolute inset-y-0 right-4 transform translate-y-1/2 top-[-12px]">
					<p className="text-red text-15 leading-23 font-500">Can't be empty</p>
				</div>
			)}
		</div>
	);
};

export default TextField;
