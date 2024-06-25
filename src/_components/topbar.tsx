{/** landing-hero.tsx */}
import React from 'react';

interface TopBarProps {
    page: string | string[],
    collapsed: boolean,
    logoUrl: string
}
const TopBar: React.FC<TopBarProps> = ({ page, collapsed, logoUrl, ...props }) => {
    return (
            <div {...props} 
                className={
                    `flex text-black h-[7vh] gap-[1em] items-center justify-end pr-[1em] w-[100%] pr-[1em] pl-[1em]`
                }
            >

                {/* Pages Section */}
                
                <div 
                    className='flex text-black h-[7vh] gap-[1em] items-center justify-start w-[100%]'
                >
                    {Array.isArray(page) ? page.map((pageTitle, index) => (
                        <a key={index}>{pageTitle}</a>
                    )) : <a>{page}</a>}

                </div>

                {/* Logo */}

                <img className='max-h-[1.75em]' src={logoUrl} alt="42 Logo"/>

            </div>
            
    );
};

export default TopBar;