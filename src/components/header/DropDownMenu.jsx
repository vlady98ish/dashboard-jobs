import React from 'react';
import BoardItems from '../common/BoardItems';
import { useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';
import CreateNewBoard from '../common/CreateNewBoard';
import ThemeToggle from '../common/ThemeToggle';

const DropDownMenu = ({ setAddBoardModalOpen, setIsDropDownOpen }) => {
	const { boardList } = useSelector((state) => state.boards);
	return (
		<div className="absolute top-[50px] left-1/2 transform -translate-x-1/2  z-50">
			<div className="flex flex-col bg-white rounded-[8px] shadow-drop dark:bg-dark_grey">
				<h3
					className="text-medium_grey text-12 leading-15
         tracking-2.4  font-700
         non-italic mt-[16px] pl-[24px]"
				>
					ALL BOARDS ({boardList.length})
				</h3>
				{boardList.length === 0 ? (
					<div className="flex justify-center items-center py-[50px]">
						<TailSpin color="#00BFFF" height={80} width={80} />
					</div>
				) : (
					<BoardItems boards={boardList} />
				)}
				<CreateNewBoard
					setIsOpen={setAddBoardModalOpen}
					setIsDropDownOpen={setIsDropDownOpen}
				/>
				<ThemeToggle padding="px-[57px] py-[14px]" />
			</div>
		</div>
	);
};

export default DropDownMenu;
