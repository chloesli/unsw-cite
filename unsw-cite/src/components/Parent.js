import React, { Component } from 'react'
import Child from './Child'
export class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "Parent"
        }
    }

    greet = (childname) => {
        alert(`Hello + ${this.state.parentName}  from ${childname}`);
    }

    render() {
        return (
            <div>
                <Child greet={this.greet}></Child>
            </div>
        )
    }
}

export default Parent
