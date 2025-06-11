import { useState } from 'react'
import Events from '/src/events.jsx'
import Header from './header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const eventList = [

  ]

  return (
    <>
    
      <Header/>
      <Events/>
      
    </>
  )
}  

export default App
