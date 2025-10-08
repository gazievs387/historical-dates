import React, { useRef, useState } from 'react';
import { Period } from 'types/historicalDates';
import TimelineEvent from './TimelineEvent';
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import { FreeMode, Keyboard, Mousewheel, Pagination } from "swiper/modules"
import { ReactComponent as ArrowIcon } from "static/svgs/Arrow.svg"
import "swiper/css"
import "swiper/css/navigation"
import "../styles/Timeline.scss"


interface TimelineProps {
    period: Period;
}


export function Timeline({period}: TimelineProps) {
    const [slide, setSlide] = useState(0)
    const swiperEl = useRef<SwiperClass>(undefined)


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
                {period.events.map((periodEvent, index) => 
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
