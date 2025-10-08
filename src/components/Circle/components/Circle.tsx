import { Dispatch, SetStateAction, useCallback, useEffect, useState  } from "react";
import { getCircleRadius } from "utils/getCircleRadius";
import "../styles/Circle.scss"
import { CircleElement } from "./CircleElement";
import { Period } from "types/historicalDates";


interface CircleProps {
    circleStep: number;
    elements: Period[];
    onChangeStep: (step: number) => void;
}


export function Circle({circleStep, onChangeStep, elements} : CircleProps) {
    const [radius, setRadius] = useState(getCircleRadius())
    const totalElements = elements.length;
    const angleStep = 360 / totalElements; 
    const [activeEls, setActiveEls] = useState<number[]>([])

    // Вычисляем на сколько нужно повернуть круг
    const rotateDeg = angleStep * circleStep


    useEffect(() => {
        function handleResize() {
            setRadius(getCircleRadius())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        } 
    }, [])


    const onClickItem = useCallback((index: number) => {
        onChangeStep(index)
    }, [])

    
    return (
        <div className='dateCircle'>
            <div 
                className='circle' 
                style={{
                    transform: `rotate(-${rotateDeg}deg)`
                }}
            >
                {elements.map((value, index) => {
                    const isActive = index === circleStep
                    const isMouseOn = activeEls.includes(index)

                    
                    const angle = index * angleStep + 180 / totalElements

                    const deviation = (isActive || isMouseOn) ? 25 : 3

                    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius - deviation
                    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius - deviation

                    return (
                        <CircleElement
                            key={value.id}
                            index={index}
                            value={value}
                            rotateDeg={rotateDeg}
                            onClick={onClickItem}
                            isActive={isActive}
                            isMouseOn={isMouseOn}
                            setActiveEls={setActiveEls}
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
