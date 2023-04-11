import React from 'react';

const TextField = ({ type, id, name, placeholder }) => {
	const style = `border border-medium_grey border-opacity-25 rounded-[4px] w-full 
	py-[8px] px-[16px] mt-[12px] font-500 text-12 leading-23 placeholder:text-black placeholder:opacity-25`;
	return (
		<input
			type={type}
			id={id}
			name={name}
			placeholder={placeholder}
			className={style}
		/>
	);
};

export default TextField;
