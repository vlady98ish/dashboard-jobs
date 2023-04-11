import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import LightThemeIcon from "../../assets/icon-light-theme.svg";
import DarkThemeIcon from "../../assets/icon-dark-theme.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../features/theme/themeSlice";

const ThemeSwitcher = ({ padding }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeChanger.theme);

  function handleClick() {
    dispatch(changeTheme());
  }

  return (
    <div
      className={`flex ${padding} flex-row bg-light_grey rounded-[6px] mx-[12px] my-[16px] md: my-0 dark:bg-very_dark_grey lg:mx-[24px] md:mx-[12px]`}
    >
      <label className={"flex items-center justify-center gap-[24px] "}>
        <img src={LightThemeIcon} alt="" />
        <Toggle
          checked={theme === "dark"}
          onChange={handleClick}
          icons={false}
        />
        <img src={DarkThemeIcon} alt="" />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
