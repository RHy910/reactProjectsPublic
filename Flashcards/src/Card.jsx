import React, { useState } from "react";


const Card = (props)=>{
    const question = (<>{props.question}</>)
    const answer = (< >{props.answer}</>)
    const [display,changedisplay] = useState(false)

    return(
        <>
        <div className="flashcard" onClick={()=>changedisplay(prev => !prev)}>
            {display ? answer : question}
        </div>
        </>
    )
}

export default Card;