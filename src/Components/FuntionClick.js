import React from 'react'

function FuntionClick() {

    function clickHandler() {
        console.log('clicked')
    }
  return (
    <>
    <button onClick = {clickHandler}>Click</button>
    </>
  )
}

export default FuntionClick