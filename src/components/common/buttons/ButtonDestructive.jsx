import React from "react";

const DestructiveButton = ({ text: text }) => {
  const normalStyle = `bg-red rounded-[20px] text-white px-[8px] py-[68px]`;
  const hoverStyle = `hover: bg-red-hover`;
  return (
    <button className={`${normalStyle} ${hoverStyle}`}>
      <span className="font-700 text-13 leading-23 text-white">{text}</span>
    </button>
  );
};

export default DestructiveButton;
