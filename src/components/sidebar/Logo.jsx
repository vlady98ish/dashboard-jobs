import React from 'react';
import { useSelector } from 'react-redux';
import LightLogo from '../../assets/logo-dark.svg';
import DarkLogo from '../../assets/logo-light.svg';

const Logo = () => {
	const theme = useSelector((state) => state.themeChanger.theme);
	return (
		<div className="md:pt-[32px] pr-[81px] lg:pr-[113px]">
			<img src={theme === 'light' ? LightLogo : DarkLogo} alt="" />
		</div>
	);
};

export default Logo;
