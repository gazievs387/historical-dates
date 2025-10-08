import { Dispatch, SetStateAction, useEffect  } from "react";
import { getCircleRadius } from "utils/getCircleRadius";
import "../styles/Circle.scss"
import { CircleElement } from "./CircleElement";
import { Period } from "types/historicalDates";


interface CircleProps {
    radius: number;
    setRadius: Dispatch<SetStateAction<number>>;
    circleStep: number;
    elements: Period[];
}


export function Circle({radius, setRadius, circleStep, elements} : CircleProps) {
    const totalElements = elements.length;
    const angleStep = 360 / totalElements; 


    useEffect(() => {
        function handleResize() {
            setRadius(getCircleRadius())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        } 
    }, [])


    return (
        <div className='dateCircle'>
            <div className='circle'>
                {elements.map((value, index) => {
                    const angle = index * angleStep + 180 / totalElements
                    
                    const isActive = circleStep === index
                    const deviation = isActive ? 20 : 3

                    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius - deviation
                    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius - deviation

                    return (
                        <CircleElement 
                            key={value.id}
                            index={index}
                            value={value}
                            isActive={isActive}
                            x={x}
                            y={y}
                        />
                    );
                })}

            </div>

            <div className='years'>
                <span className='first'>{elements[circleStep].startYear}</span>

                <span className='second'>{elements[circleStep].endYear}</span>
            </div>
        </div>
    );
}
