import { Circle } from 'components/Circle';
import { Controls } from 'components/Controls';
import { Timeline } from 'components/Timeline';
import { historicalData } from 'consts/historicalData';
import { useState } from 'react';
import "styles/App.scss"
import { getCircleRadius } from 'utils/getCircleRadius';
  

function App() {
    const [radius, setRadius] = useState(getCircleRadius())
    const [circleStep, setCircleStep] = useState(0)
    const dataLength = historicalData.length

    
    return (
        <main>
            <div className='mainContent'>
                <span className='head'>Исторические <br /> даты</span>

                <Circle 
                    elements={historicalData}
                    radius={radius} 
                    setRadius={setRadius}
                    circleStep={circleStep} 
                />

                <Controls 
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