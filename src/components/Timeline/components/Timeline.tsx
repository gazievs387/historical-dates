import React, { useRef, useState } from 'react';
import { Period } from 'types/historicalDates';
import TimelineEvent from './TimelineEvent';
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import { FreeMode, Keyboard, Mousewheel, Pagination } from "swiper/modules"
import { ReactComponent as ArrowIcon } from "static/svgs/Arrow.svg"
import "swiper/css"
import "swiper/css/navigation"
import "../styles/Timeline.scss"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


interface TimelineProps {
    period: Period;
}


export function Timeline({period}: TimelineProps) {
    const [periodData, setPeriodData] = useState(period)
    const [slide, setSlide] = useState(0)
    const swiperEl = useRef<SwiperClass>(undefined)


    useGSAP(() => {
        gsap.to(".timeline", {opacity: 0, duration: 0.5}).then(() => {
            
            setPeriodData(period)

            gsap.to(".timeline", {opacity: 1, duration: 0.5})
        })

    }, { dependencies: [period], revertOnUpdate: true})


    return (
        <div className='timeline'>
            <div
                className='prevEl' 
                onClick={() => swiperEl.current?.slidePrev()}
            >
                <div 
                    style={{
                        display: slide === 0 ? "none" : "inherit"
                    }}
                >
                    <ArrowIcon />
                </div>
            </div>

            <Swiper
                key={periodData.id} 
                className='swiper'
                onSwiper={(swiper) => {swiperEl.current = swiper}}
                onRealIndexChange={(swiper) => {setSlide(swiper.activeIndex)}}
                slidesPerView={3}
                spaceBetween={80}
                mousewheel
                freeMode
                pagination={{clickable: true}}
                keyboard
                modules={[Mousewheel, FreeMode, Pagination, Keyboard]}
            >
                {periodData.events.map((periodEvent, index) => 
                    // Статичный список, поэтому можно использовать index как key
                    <SwiperSlide key={index}>
                        <TimelineEvent event={periodEvent}/>
                    </SwiperSlide>
                )}
            </Swiper>   

            <div 
                style={{rotate: "180deg"}} 
                className="nextEl" 
                onClick={() => swiperEl.current?.slideNext()}
            >
                <div 
                    style={{
                        display: slide === 5 ? "none" : "inherit"
                    }}
                >
                    <ArrowIcon />
                </div>
            </div>
        </div>
    )
}
