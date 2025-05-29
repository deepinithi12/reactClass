import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Loginpage from './Loginpage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Loginpage/>
    </>
  )
}

export default App
