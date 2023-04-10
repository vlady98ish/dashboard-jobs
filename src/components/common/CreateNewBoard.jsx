import React from "react";
import IconBoardPurple from "../../assets/icon-board-purple.svg";

const CreateNewBoard = () => {
  return (
    <div
      className="flex items-center justify-start gap-4
         cursor-pointer py-[15px]  cursor-pointer py-[15px] lg:pl-8 pl-[24px]"
    >
      <img src={IconBoardPurple} alt="icon-board" />
      <span className="text-main_purple text-15 leading-19 font-700">
        + Create New Board
      </span>
    </div>
  );
};

export default CreateNewBoard;
