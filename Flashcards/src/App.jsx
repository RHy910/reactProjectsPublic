import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
import data from "./assets/examjsons/practice-exam-1.json"
function App() {
  const [questionNum, changequestion] = useState(1)

  function handleNextclick(){
    if(questionNum < 50){
      changequestion(questionNum +1)
    }
    else{
      changequestion(1)
    }
  }

   function handleprevclick(){
    if(questionNum >1){
      changequestion(questionNum -1)
    }
    else{
      changequestion(50)
    }
  }



  return (
    <>
      <h1>AWS Cloud Practitioner Flashcards</h1>
      <h3>you ready to pass this cloud exam!! <br/> lets get it</h3>
      <Card question={data[questionNum]["question"]} answer ={data[questionNum]["answerText"]}  />
      <div classname="left-right-Buttons">
          <button onClick={handleNextclick} >prev</button>
          <button onClick={handleprevclick}>next</button>
      </div>
  
    </>
  )
}

export default App
