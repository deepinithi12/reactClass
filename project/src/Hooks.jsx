import React from 'react'

function Hooks({setNum}){
  return (
    <>
    <div>
      <input type="text"
      onChange={(e)=>setNum(e.target.value)}/>
      </div>
      </>
  )
}

export default Hooks
