import React from "react";
import { useSelector } from "react-redux";
import LightLogo from "../../assets/logo-dark.svg";
import DarkLogo from "../../assets/logo-light.svg";

const Logo = () => {
  const theme = useSelector((state) => state.themeChanger.theme);
  return (
    <img
      src={theme === "light" ? LightLogo : DarkLogo}
      alt=""
      className="px-[25px]"
    />
  );
};

export default Logo;
