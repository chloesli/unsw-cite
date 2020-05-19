import React from 'react'
// rfce - shortcut
function FunctionClick() {

    
    return (
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
    function clickHandler() {
        console.log("Button Clicked");
    }
}

export default FunctionClick
