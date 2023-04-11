import React from "react";

const PrimaryButton = ({ text, margin, padding_x, padding_y }) => {
  const normalStyle = `bg-main_purple rounded-[24px] ${margin} px-[${padding_x}px] py-[${padding_y}px]`;
  const hoverStyle = `hover:bg-main_purple_hover `;
  return (
    <button className={`${normalStyle} ${hoverStyle}`}>
      <span className="font-700 text-15 leading-19 text-white">{text}</span>
    </button>
  );
};

export default PrimaryButton;
