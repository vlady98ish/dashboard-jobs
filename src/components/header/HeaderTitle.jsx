import React from 'react';
import MobileLogo from '../../assets/logo-mobile.svg';

const HeaderTitle = ({ isMobile, selectedBoard }) => {
	return (
		<div className={isMobile ? `flex gap-[16px]` : ``}>
			{isMobile && <img src={MobileLogo} alt="Logo" />}
			<h1 className="text-black font-700 dark:text-white md:text-24 md:leading-30 text-18 leading-23">
				{selectedBoard ? selectedBoard.name : 'Select Board'}
			</h1>
		</div>
	);
};

export default HeaderTitle;
