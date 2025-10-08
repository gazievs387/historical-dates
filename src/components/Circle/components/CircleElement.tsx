import React, { Dispatch, memo, MouseEventHandler, SetStateAction } from 'react';
import { Period } from 'types/historicalDates';


interface CircleElementProps {
    index: number;
    value: Period;
    x: number;
    y: number;
    rotateDeg: number;
    onClick: (index: number) => void;
    isActive: boolean;
    isMouseOn: boolean;
    setActiveEls: Dispatch<SetStateAction<number[]>>;
}


function CircleElementComponent({index, value, x, y, rotateDeg, onClick, isActive=false, isMouseOn, setActiveEls}: CircleElementProps) {
    const expandItem = isActive || isMouseOn
    const size = expandItem ? 55 : 5


    return (
        <div 
            onClick={() => onClick(index)}
            onMouseEnter={() => {setActiveEls(els => [...els, index])}}
            onMouseLeave={() => {setActiveEls(els => els.filter((el) => el !== index))}}
            className={"item" + (expandItem ? " active" : "")}
            style={{
                width: size,
                height: size,
                transform: `translate(${x}px, ${y}px) rotate(${rotateDeg}deg)`,
            }}
        >
            {expandItem && value.id}

            {isActive && <span className="category">{value.category}</span>}
        </div>
    )
}


export const CircleElement = memo(CircleElementComponent)
