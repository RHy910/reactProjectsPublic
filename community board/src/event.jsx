import React from "react";

const Event = (props)=>{
    return(
        <div className="event-wrapper">
            <div className="event">
                <img src={props.image} style={{
                    width: "380px",
                    height: '480px',
                    objectFit: 'cover',
                }}></img>
                
                <h3>{props.name}</h3>
                <h4>{props.type}</h4>
                <a href={props.website}><button style={{
                    padding: '10px 16px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                   
                }}>{props.menu}</button></a>
                </div>
        </div>
    )
}
 
export default Event;