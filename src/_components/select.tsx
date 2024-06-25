import React from 'react'
import { DetailedHTMLProps } from 'react';

interface SelectProps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    text: string;
    label: string;
    options: string[];
  }
  
  const Select: React.FC<SelectProps> = ({text, label, options }) => {
    return (
        <div className="h-[auto] flex-col justify-center items-start gap-[5px] inline-flex text-black">
            {label}
            <select name={text}>
                {options?.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
  };
  
  export default Select;