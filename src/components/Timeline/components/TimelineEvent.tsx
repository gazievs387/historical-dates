import React, { memo } from 'react';
import { Event } from 'types/historicalDates';
import "swiper/css"


interface TimelineItemProps {
    event: Event;
}


function TimelineEvent({event}: TimelineItemProps) {
    return (
        <div className='timelineEvent'>
            <span>{event.year}</span>

            <p>
                {event.description}
            </p>
        </div>
    )
}

export default memo(TimelineEvent)
