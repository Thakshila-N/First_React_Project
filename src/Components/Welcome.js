import { Component } from "react";

class Wellcome extends Component{
    render(){
        return <h1>This is class {this.props.name}</h1>
    }
}

export default Wellcome;