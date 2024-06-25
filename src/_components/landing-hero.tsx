{/** landing-hero.tsx */}
import React from 'react';

interface HeroProps {
    imageUrl: string,
    header: string,
    subtitle: string,
}
const LandingHero: React.FC<HeroProps> = ({ imageUrl, header, subtitle, ...props }) => {
    return (
            <div {...props} 
                className={
                    `flex h-[35vh] w-[100%] items-space-between justify-start`
                }
            >
                    {/* Left Column */}
                    <div className='flex text-black flex-col items-start justify-center w-[50%] ml-[2em]'>
                        <h5 className='text-[2em] m-0 items-start font-[helvetica-bold] h-auto'>{header}</h5>
                        <h6 className='text-[0.9em] m-0 font-[helvetica-light] h-auto'>{subtitle}</h6>
                    </div>

                    {/* Right Column */}
                    <div className='flex h-[100%] w-[42%] items-center'>
                        <img className='mt-[0vh]' src={imageUrl} alt="Colored Hero Image"/>
                    </div>
                    
            </div>
            
    );
};

export default LandingHero;