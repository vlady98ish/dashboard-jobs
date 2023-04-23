import React from 'react';
import CustomLabel from '../CustomLabel';
import DescriptionTextArea from './DescriptionTextArea';

const Description = ({ register, value }) => {
	return (
		<div>
			<CustomLabel text="Description" />
			<DescriptionTextArea register={register} value={value} />
		</div>
	);
};

export default Description;
