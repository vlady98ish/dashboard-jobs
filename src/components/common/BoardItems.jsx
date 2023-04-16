import React from 'react';
import BoardItem from './BoardItem';

const BoardItems = ({ boards }) => {
	return (
		<ul className="mt-[19px] pr-[24px] lg:pr-[23px] md:pr-[20px]">
			{boards.length > 0 ? (
				boards.map((board) => (
					<BoardItem board={board} key={board.id} id={board.id} />
				))
			) : (
				<p>No board to display</p>
			)}
		</ul>
	);
};

export default BoardItems;
