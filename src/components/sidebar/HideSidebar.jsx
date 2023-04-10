import React from "react";
import HideBar from "../../assets/icon-hide-sidebar.svg";
import { useDispatch } from "react-redux";
import { toggleSidebarOnClick } from "../../utils/handler";

const HideSideBar = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex justify-start items-center gap-[15px] cursor-pointer text-medium_grey pl-[31px] py-[15px] mt-[8px] mr-[25px] hover:rounded-r-[100px] hover:bg-main_purple hover:bg-opacity-10 hover:mix-blend-normal hover:text-main_purple"
      onClick={() => {
        toggleSidebarOnClick(dispatch);
      }}
    >
      <img src={HideBar} alt="Hide Sidebar" className="w-[16px] h-[16px]" />
      <span className="text-15 leading-19 font-700 ">Hide Sidebar</span>
    </div>
  );
};

export default HideSideBar;
