import React from "react";

type SecondButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  bgColor?: string;
  textColor?: string;
  shadow?: string;
};

const SecondButton: React.FC<SecondButtonProps> = ({ text, onClick, className, bgColor, textColor, shadow }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row justify-center items-center px-[25px] py-2 rounded-full ${shadow??"shadow-none"} ${textColor??"text-white"} font-semibold text-[14px] ${bgColor??"bg-gradient-to-r from-[#011E3E] to-[#0E5588]"} ${className}`}
    >
      {text}
    </button>
  );
};

export default SecondButton;
