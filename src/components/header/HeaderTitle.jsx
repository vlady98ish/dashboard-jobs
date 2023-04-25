import React from 'react';
import MobileLogo from '../../assets/logo-mobile.svg';
import ArrowUp from '../../assets/icon-chevron-up.svg';
import ArrowDown from '../../assets/icon-chevron-down.svg';
import DropDownMenu from './DropDownMenu';
import Logo from '../sidebar/Logo';

const HeaderTitle = ({
	isMobile,
	selectedBoard,
	setIsDropDownOpen,
	isDropDownOpen,
	setAddBoardModalOpen
}) => {
	return (
		<div className={isMobile ? `flex gap-[16px]` : `px-[24px]`}>
			{isMobile && <img src={MobileLogo} alt="Logo" />}

			<h1 className="text-black font-700 dark:text-white md:text-20 md:leading-25 lg:text-24 lg:leading-30 text-18 leading-23">
				{selectedBoard ? selectedBoard.name : 'Select Board'}
			</h1>
			{isMobile && (
				<button
					onClick={() => {
						setIsDropDownOpen(!isDropDownOpen);
					}}
				>
					<img
						src={isDropDownOpen ? ArrowUp : ArrowDown}
						alt="Drop Down Menu"
					/>
				</button>
			)}

			{isDropDownOpen && isMobile && (
				<DropDownMenu
					setAddBoardModalOpen={setAddBoardModalOpen}
					setIsDropDownOpen={setIsDropDownOpen}
					isDropDownOpen={isDropDownOpen}
				/>
			)}
		</div>
	);
};

export default HeaderTitle;
