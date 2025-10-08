import React, { memo } from 'react';
import { Period } from 'types/historicalDates';


interface CircleElementProps {
    index: number;
    value: Period;
    x: number;
    y: number;
    isActive: boolean;
}


function CircleElementComponent({index, value, x, y, isActive=false}: CircleElementProps) {
    const size = isActive ? 55 : 5

    return (
        <div 
            key={index} 
            className={"item" + (isActive ? " active" : "")}
            style={{
                width: size,
                height: size,
                transform: `translate(${x}px, ${y}px)`,
            }}
        >
            {isActive && 
            <>
                {value.id}

                <span className="category">{value.category}</span>
            </>}
        </div>
    )
}


export const CircleElement = memo(CircleElementComponent)
