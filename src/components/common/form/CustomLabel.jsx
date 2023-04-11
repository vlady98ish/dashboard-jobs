import React from 'react';

const CustomLabel = ({ htmlFor, text }) => {
	const style = `block text-medium_grey lg:text-12 lg:leading-15 font-700`;
	return (
		<label htmlFor={htmlFor} className={style}>
			{text}
		</label>
	);
};

export default CustomLabel;
