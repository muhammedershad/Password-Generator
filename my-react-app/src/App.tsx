import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BackgroundBeamsDemo } from './components/ui/BackgroundBeams'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BackgroundBeamsDemo />
      </div>
    </>
  )
}

export default App
