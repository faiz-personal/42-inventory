import React from 'react';

interface CardProps {
    title: string,
    content: string | string[], 
    darkMode: boolean,
    centerAlign: boolean,
    children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ title, centerAlign, content, darkMode, children }) => {
    return (
        <div className="w-full py-8 px-8 bg-gray-100 bg-opacity-40 backdrop-blur-lg flex flex-col justify-start items-start gap-2.5 overflow-hidden rounded-lg border border-gray-500"
            style={{
                zIndex: 0,
                overflowX: 'auto' // Enable horizontal scrolling
            }}>
            <h1 className="text-black text-xl font-bold">{title}</h1>

            <div className={`flex w-full text-gray-400 ${centerAlign ? 'justify-center' : 'justify-start'}`}>
                {content}
                {children}
            </div>

        </div>
    );
};

export default Card;
