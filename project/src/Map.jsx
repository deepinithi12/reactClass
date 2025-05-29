import React from 'react'

function Map({goal}) {
  // console.log({goal})
  return (
    <>
    <div>
      {/*< Child count={count}/>*/}
        {goal.map((user)=>(
            <ol> key={user.id}
            <li>{user.name}</li>
            <li>{user.age}</li>
            </ol>
        ))}
    </div>
    </>
  )
}

export default Map
