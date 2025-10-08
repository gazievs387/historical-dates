import { Circle } from 'components/Circle';
import { Controls } from 'components/Controls';
import { Timeline } from 'components/Timeline';
import { historicalData } from 'consts/historicalData';
import { useCallback, useState } from 'react';
import "styles/App.scss"


function App() {
    const [circleStep, setCircleStep] = useState(0)
    const dataLength = historicalData.length


    const onChangeStep = useCallback((step: number) => {
        setCircleStep(step)
    }, [])

    
    return (
        <main>
            <div className='mainContent'>
                <span className='head'>Исторические <br /> даты</span>

                <Circle 
                    onChangeStep={onChangeStep}
                    elements={historicalData}
                    circleStep={circleStep} 
                />

                <Controls 
                    onChangeStep={onChangeStep}
                    circleStep={circleStep} 
                    totalSteps={dataLength} 
                />

                <Timeline 
                    period={historicalData[circleStep]} 
                />
            </div>  
        </main>
    )
}


export default App;