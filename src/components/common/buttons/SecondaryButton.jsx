import React from "react";

const SecondaryButton = ({ text: text }) => {
  const normalStyle = `bg-main_purple bg-opacity-10 rounded-[20px] text-main_purple px-[8px] py-[70px]`;
  const hoverStyle = `hover: bg-opacity-25`;
  return (
    <button className={`${normalStyle} ${hoverStyle} `}>
      <span className="font-700 text-13 leading-23 text-main_purple">
        {text}
      </span>
    </button>
  );
};

export default SecondaryButton;
