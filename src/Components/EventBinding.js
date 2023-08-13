import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({

            message: 'Good'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick = {this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBinding