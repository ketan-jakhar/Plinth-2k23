import { useEffect, useState } from "react";
import { intervalToDuration} from 'date-fns';

export const useTimer = (futureDate) => {
    const [now, setNow] =  useState(new Date());

    useEffect(() => {        
        const interval = setInterval(() => {
            setNow(new Date());          
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
    }, [futureDate]);

    let { days, hours, minutes, seconds } = intervalToDuration({
        start: now,
        end: futureDate
    });

    return { days, hours, minutes, seconds };
};