import React from "react";
import truck from './assets/images/Tacotruck.jfif'
import Event from "/src/event.jsx";

const Events = (props) => {

    const eventList = [
        {image: truck,
        name: "Birria-Landia",
        type:"mexican",
        menu:"view menu"
        },
        {image: truck,
        name: "Birria-Landia",
        type:"mexican",
        menu:"view menu"
        },
        {image: truck,
        name: "Birria-Landia",
        type:"mexican",
        menu:"view menu"
        },
        {image: truck,
        name: "Birria-Landia",
        type:"mexican",
        menu:"view menu"
        },

    ]
    return (
        <div className="events">
                {eventList.map((event,index) => ( <Event key={index} image = {event.image} name = {event.name} type = {event.type} menu = {event.menu} />))
                }
            </div>
    )
}

export default Events;