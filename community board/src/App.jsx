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
      <h3>hi hello</h3>
      {/* <Header/> */}
      <Events/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 10)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}  

export default App
