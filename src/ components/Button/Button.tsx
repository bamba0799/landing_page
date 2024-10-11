import React from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    // text: string;
    className?: string;
    onClick?: () => void;
}
const Button:React.FC<ButtonProps> = ({children, onClick, className}) => {
    return (
        <button onClick={onClick} className={`px-[6px] py-[4px] outline outline-[1px] rounded-[5px] outline-green-600 ${className}`}>
            {children}
        </button >
    );
}
export default Button;

