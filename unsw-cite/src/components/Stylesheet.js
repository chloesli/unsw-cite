import React from 'react'
import './styles.css'
function Stylesheet(props) {
    let className = props.primary ? 'primary' : "";
    const heading = {
        fontSize: '72px',
        textDecoration:'underline'
    }
    return (
        <div>
            <h1 style={heading} className={className}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
