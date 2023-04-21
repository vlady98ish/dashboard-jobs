import React from 'react';

const Subtask = ({ subtask }) => {
	return (
		<div className="flex gap-4">
			<label
				htmlFor="checkbox-list"
				className="relative flex items-center w-full cursor-pointer gap-4 rounded bg-light_grey p-3 hover:bg-main_purple hover:bg-opacity-25 dark:bg-very_dark_grey "
			>
				<input
					id="checkbox-list"
					type="checkbox"
					className="absolute h-0 w-0 opacity-0"
					value="false"
				/>
				<span
					className="flex h-4 w-4 items-center justify-center rounded-[4px] border border-medium_grey border-opacity-20  after:absolute
        after:top-1.5 after:h-2 after:w-2.5
      bg-white after:hidden after:content-none dark:bg-dark_grey"
				></span>
				<p className=" text-12 font-700 text-black dark:text-white">
					{subtask.title}
				</p>
			</label>
		</div>
	);
};

export default Subtask;
