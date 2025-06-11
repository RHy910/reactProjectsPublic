import React from "react";

const Event = (props)=>{
    return(
        <div className="event-wrapper">
            <div className="event">
                <img className="eventpics" src={props.image} ></img>
                
                <h3>{props.name}</h3>
                <h4>{props.type}</h4>
                <a href={props.website}><button style={{
                    padding: '10px 16px',
                    fontSize: '16px',
                    backgroundColor: '#b4e1ff',
                    color: 'black',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                   
                }}>{props.menu}</button></a>
                </div>
        </div>
    )
}
 
export default Event;