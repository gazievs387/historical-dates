import { useEffect, useRef, useState } from 'react';
import { changeYear } from 'utils/changeYear';


interface YearsProps {
    startYear: number;
    endYear: number;
}


function Years({startYear, endYear}: YearsProps) {
    const [currentYears, setYears] = useState({startYear: 0, endYear: 0})
    const interval = useRef<NodeJS.Timeout | undefined>(undefined)


    useEffect(() => {
        clearInterval(interval.current)

        if (!currentYears.endYear && !currentYears.endYear) {
            setYears({startYear, endYear})
        } else {
            interval.current = setInterval(() => {
                setYears((years) => {
                    if (years.startYear === startYear && years.endYear === endYear) {
                        clearInterval(interval.current)
                    }
                    
                    return ({
                        startYear: changeYear(years.startYear, startYear), 
                        endYear: changeYear(years.endYear, endYear)
                    })
                })

            }, 75)
        }

    }, [startYear, endYear])


    return (
        <div className='years'>
            <span className='first'>{currentYears.startYear}</span>

            <span className='second'>{currentYears.endYear}</span>
        </div>
    );
}


export default Years;
