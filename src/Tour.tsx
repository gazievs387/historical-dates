import { StepType, TourProvider } from '@reactour/tour';
import React, { PropsWithChildren } from 'react';
import { deviceScreen } from 'utils/mediaScreen';


export function Tour({ children }: PropsWithChildren) {
    const isDesktop = deviceScreen === "desktop" || deviceScreen === "lg"


    const steps: StepType[] = [
        {
            selector: ".highlightEl",
            content: "Попробуйте навести и нажать на элемент",
            styles: {badge: () => ({display: "none"}), controls: () => ({display: "none"})},
            padding: 30
        }
    ]
    

    return (
        <TourProvider 
            steps={isDesktop ? steps : []}
        >
            {children}
        </TourProvider>
    )
}
