import React, { lazy } from 'react';

type InputProps = {
    label?: string;
    placeholder?: string;
    value?: string;
    required?: boolean;
    id:string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input:React.FC<InputProps> = ({onChange, placeholder, label, value,required, id}) => {
    return (
        <div className='flex flex-col space-y-[5px] text-primary_gray'>
            <label htmlFor={id} className='text-[14px]'>
              <span>{label}</span>
              {required &&
                <span className='text-red-500'>*</span>
              }
            </label>
            <input id={id} value={value} required={required} type="text" className='w-full h-[40px] px-[10px] text-[14px] text-primary_green outline-primary_gray outline-[20px] focus:outline-primary_green font-bold' placeholder={placeholder} onChange={onChange}/>
        </div>
    ); 
}

export default Input;

