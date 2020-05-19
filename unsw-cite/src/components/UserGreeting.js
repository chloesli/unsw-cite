import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        let message = (this.state.isLoggedIn) ? <div>Welcome Chloe</div>:<div>Welcome Gues</div>
        return (
            <div>{message}</div>
        )
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Chloe</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>


        
        //         <div>Welcome Guest</div>
        //         <div>Welcome Chloe</div>
        //     </div>
        // )
    }
}

export default UserGreeting
