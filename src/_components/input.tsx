import React from 'react';
import { DetailedHTMLProps } from 'react';

interface InputProps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    text: string;
    name: string;
    label: string;
  }
  
  const Input: React.FC<InputProps> = ({ value, onChange, text, label, name }) => {
    return (
        <div className="h-[auto] flex-col justify-center items-start gap-[5px] inline-flex">

            <h5 className='text-black'>{label}</h5>

            <div className="w-[85vw] self-stretch px-[9px] py-2.5 bg-zinc-400 bg-opacity-10 rounded-[5px] justify-start items-center gap-2.5 inline-flex"
                 style={{ 
                     borderImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.01)) 0.5',
                     border: '0.5px' 
                 }}
            >
            
                {/* Input Field Element */}
                <input
                    id={text}
                    name={name}
                    autoComplete='true'
                    placeholder={text}
                    className='w-full'
                    value={value}
                    onChange={onChange}
                    style={{ 
                        fontFamily: 'Helvetica', 
                        fontSize: '1em', 
                        background: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'left',
                        color: 'black',
                        height: '100%',
                        outline: 'none',
                        boxShadow: 'none',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                    }}
                >
                
                 </input>

            </div>
        </div>
    );
  };
  
  export default Input;