import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Studentform from './Studentform'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Biodata from './Biodata'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
         <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/studentform" element={<Studentform />}></Route>
        <Route path="/biodata" element={< Biodata/>}></Route>
      </Routes>
    </Router>

    </>
  )
}

export default App
