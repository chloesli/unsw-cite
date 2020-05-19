import React, { Component } from 'react'
// Shortcut - rce
class EventBind extends Component {
    // rconst
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
       // this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler = () => {
        this.setState ({
            message: "Goodbye!"
        })
        console.log("HI");
    }
    render() {
        return (
            <div>
            <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind;
