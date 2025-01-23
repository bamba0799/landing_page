import React from "react";

type FirstButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const FirstButton: React.FC<FirstButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border border-blue-900 rounded-full text-blue-900 font-semibold text-[14px] ${className}`}
    >
      {text}
    </button>
  );
};

export default FirstButton;
