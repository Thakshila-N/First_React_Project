import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick = {()=> props.greetParent()}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent