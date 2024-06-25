{/** login-button.tsx */}
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    gray?: boolean;
    text: string;
}

const LoginButton: React.FC<ButtonProps> = ({ gray, text, ...props }) => {
    const colorClasses = gray ? 
        "bg-gradient-to-l from-gray-500 to-gray-400" 
        : "bg-gradient-to-l from-blue-900 to-blue-800"

    return (
            <button {...props} type="submit" 
                className={`"self-stretch w-[70%] h-[47px] text-[1em] font-bold font-['Geist]
                            rounded-[15px] shadow-inner flex-col justify-center items-center
                            gap-2.5 flex relative z-10 text-white transition-colors duration-200
                            shadow disabled:cursor-not-allowed disabled:opacity-50"
                            
                            ${colorClasses}`}
            >
                    {text}
            </button>
    );
};

export default LoginButton;