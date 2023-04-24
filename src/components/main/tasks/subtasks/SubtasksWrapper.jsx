import React from 'react';
import Subtask from './Subtask';
import { v4 } from 'uuid';

const SubtasksWrapper = ({ subtasks }) => {
	return (
		<div className="flex flex-col gap-[8px] mt-[24px]">
			{subtasks &&
				subtasks.map((subtask) => <Subtask subtask={subtask} key={v4()} />)}
		</div>
	);
};

export default SubtasksWrapper;
