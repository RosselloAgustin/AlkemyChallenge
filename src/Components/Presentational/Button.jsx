import React from 'react'

import "./Styles/Button.css"
const Button = ({title, type}) => {
    return (
        <>
        
        <button className={`button-${type}`}>
            {title}
        </button>

        </>
    )
}

export default Button
