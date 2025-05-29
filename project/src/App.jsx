import { useState } from 'react'
import './App.css'
import Child from './Child'
import Hooks from './Hooks'

function App() {
  
  /*// function handleClick() { 
  //   alert("call from event") 
  //

  //   <>
  //   <button onClick={handleClick}>event trigger</button>
  //     <br />
  //     <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
  //     <p>hi,{name}</p>

  //     <Hooks/>
  //     <Child/>


    
// /*props*/
//        <Child2 Name={"kamalesh"} Age={20} />
//       <br />
//        <Child2 Name={"sakthivel"} Age={52} />
//        <br />
//        <Child2 Name={"raji"} Age={47} />
//      <br />
//      <Child2 Name={"rube"} Age={26} />
//        <br />
//       {/* <Map goal={user} /> */}

       {/* <div>{count}</div> */}
     {/* <button onClick={handleClick}>increase value</button> */}
      {/* <button onClick={() => setCount(count - 2)}>decrement value</button> */}
const[num,setNum]=useState("")

  return
  (
    <>
     <Child num={num}/>
     <Hooks setNum={setNum}/>
    </>
 )     
}

export default App
