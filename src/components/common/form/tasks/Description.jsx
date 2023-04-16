import React from 'react';
import CustomLabel from '../CustomLabel';
import DescriptionTextArea from './DescriptionTextArea';

const Description = () => {
	return (
		<div>
			<CustomLabel text="Description" />
			<DescriptionTextArea />
		</div>
	);
};

export default Description;
