'use client'

import React, { useEffect, useState } from 'react';

interface TimerProps {
    targetDate: string; // Date in YYYY-MM-DD format
}

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
    const [daysAway, setDaysAway] = useState<number>(0);

    useEffect(() => {
        const calculateDaysAway = () => {
            const now = new Date();
            const target = new Date(targetDate);
            const difference = target.getTime() - now.getTime();
            const days = Math.ceil(difference / (1000 * 3600 * 24));
            setDaysAway(days);
        };

        calculateDaysAway();
        const interval = setInterval(calculateDaysAway, 86400000); // Update every day

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex text-black flex-col items-center justify-center">
            <span className="text-8xl font-bold">{daysAway}</span>
            <span className="text-xl">days away</span>
        </div>
    );
};

export default Timer;
