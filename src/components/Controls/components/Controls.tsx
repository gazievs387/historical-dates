import React from 'react';
import "../styles/Controls.scss"
import { ReactComponent as ArrowIcon } from "static/svgs/Arrow.svg"


interface ControlsProps {
    circleStep: number;
    totalSteps: number;
}


export function Controls({circleStep, totalSteps}: ControlsProps) {
    const isActiveLeft = circleStep > 1
    const isActiveRight = circleStep < totalSteps


    return (
        <div className="controlsWrapper">
            <span>0{circleStep + 1}/0{totalSteps}</span>

            <div className={isActiveLeft ? "active" : ""}>
                <ArrowIcon />
            </div>

            <div className={isActiveRight ? "active" : ""}>
                <ArrowIcon style={{rotate: "180deg"}} />
            </div>
        </div>
    );
}
