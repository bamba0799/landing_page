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
      className={`px-4 py-2 rounded-full ${shadow??"shadow-none"} ${textColor??"text-white"} font-semibold text-[14px] ${bgColor??"bg-gradient-to-r from-blue-900 to-blue-600"} ${className}`}
    >
      {text}
    </button>
  );
};

export default SecondButton;
