import React from 'react'

function Child(props) {
    
    return (
        <div>
            <div>Child</div>
            <button onClick={() => props.greet("me")}>greet Parent</button>
        </div>
    )
}

export default Child
