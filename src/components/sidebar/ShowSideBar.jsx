import React from "react";
import Eye from "../../assets/icon-show-sidebar.svg";
import { useDispatch } from "react-redux";
import { toggleSidebarOnClick } from "../../utils/handler";

const ShowSideBar = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="bg-main_purple  py-[19px] pl-[18px] pr-[22px] rounded-r-[100px] absolute bottom-[32px] left-0"
      onClick={() => toggleSidebarOnClick(dispatch)}
    >
      <img src={Eye} alt="Show Side Bar" />
    </button>
  );
};

export default ShowSideBar;
