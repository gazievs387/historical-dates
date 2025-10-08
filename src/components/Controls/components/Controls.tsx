import React, { Dispatch, SetStateAction } from 'react';
import "../styles/Controls.scss"
import { ReactComponent as ArrowIcon } from "static/svgs/Arrow.svg"


interface ControlsProps {
    circleStep: number;
    totalSteps: number;
    onChangeStep: (step: number) => void;
}


export function Controls({circleStep, totalSteps, onChangeStep}: ControlsProps) {
    const isActiveLeft = circleStep > 0
    const isActiveRight = circleStep < (totalSteps - 1)


    return (
        <div className="controlsWrapper">
            <span>0{circleStep + 1}/0{totalSteps}</span>

            <div 
                onClick={() => {if (isActiveLeft) onChangeStep(circleStep - 1)}}
                className={isActiveLeft ? "active" : ""}
            >
                <ArrowIcon />
            </div>

            <div 
                onClick={() => {if (isActiveRight) onChangeStep(circleStep + 1)}}
                className={isActiveRight ? "active" : ""}
            >
                <ArrowIcon style={{rotate: "180deg"}} />
            </div>
        </div>
    );
}
