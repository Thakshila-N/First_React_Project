import React, { Component } from 'react'

class ClassClick extends Component {

    buttonClick(){
        console.log('clicked')
    }


  render() {
    return (
      <div>
        <button onClick = {this.buttonClick}>Click</button>
      </div>
    )
  }
}

export default ClassClick