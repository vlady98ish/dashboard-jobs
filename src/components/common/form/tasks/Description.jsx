import React from 'react';
import CustomLabel from '../CustomLabel';
import DescriptionTextArea from './DescriptionTextArea';

const Description = ({ register }) => {
	return (
		<div>
			<CustomLabel text="Description" />
			<DescriptionTextArea register={register} />
		</div>
	);
};

export default Description;
