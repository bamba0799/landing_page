import React from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    // text: string;
    className?: string;
    outline: boolean;
    onClick?: () => void;
}
const Button:React.FC<ButtonProps> = ({children, onClick, className, outline}) => {
    return (
        <button onClick={onClick} className={`px-[6px] py-[7px] rounded-[5px] ${outline?'border border-green-600':''} ${className}`}>
            {children}
        </button >
    );
}
export default Button;

