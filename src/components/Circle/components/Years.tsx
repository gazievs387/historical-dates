import { useEffect, useState } from 'react';
import { changeYear } from 'utils/changeYear';


interface YearsProps {
    startYear: number;
    endYear: number;
}


function Years({startYear, endYear}: YearsProps) {
    const [currentYears, setYears] = useState({startYear: 0, endYear: 0})


    useEffect(() => {
        if (!currentYears.endYear && !currentYears.endYear) {
            setYears({startYear, endYear})
        } else {
            const interval = setInterval(() => {
                setYears((years) => {
                    if (years.startYear === startYear && years.endYear === endYear) {
                        clearInterval(interval)
                    }
                    
                    return ({
                        startYear: changeYear(years.startYear, startYear), 
                        endYear: changeYear(years.endYear, endYear)
                    })
                })

            }, 50)
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
