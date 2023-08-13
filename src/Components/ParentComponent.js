import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parantName: 'Parant'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent() {
        alert(`Hello ${this.state.parantName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetParent={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent