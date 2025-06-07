import { useState } from 'react'
import Events from '/src/events.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const eventList = [

  ]

  return (
    <>
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
