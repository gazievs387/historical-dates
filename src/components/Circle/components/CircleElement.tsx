import React, { Dispatch, memo, SetStateAction } from 'react';
import { Period } from 'types/historicalDates';


function getElementClass(expandItem: boolean, index: number): string {
    let className: string = "item"

    console.log(expandItem, index)

    if (expandItem) {
        className = className.concat(" active")
    }

    if (index === 1) {
        // if second element
        className = className.concat(" highlightEl")
    }

    return className
}

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
            className={getElementClass(expandItem, index)}
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
