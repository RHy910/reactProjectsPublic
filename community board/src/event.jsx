import React from "react";

const Event = (props)=>{
    return(
        <div className="event-wrapper">
            <div className="event">
                <img src={props.image} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}></img>
                
                <h1>{props.name}</h1>
                <h1>{props.type}</h1>
                <button style={{
                    padding: '10px 16px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                   
                }}>{props.menu}</button>
                </div>
        </div>
    )
}
 
export default Event;