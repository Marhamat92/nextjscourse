import React from 'react'
import EventItem from './event-item';

function EventList(props) {
const {items} = props; //altda sadece items yazmak için


    return (
        <div>
            <ul>
                {items.map(event => <EventItem/> )}
            </ul>
        </div>
    )
}

export default EventList
