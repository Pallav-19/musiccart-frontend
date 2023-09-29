import React from 'react'
import "./Button.css"
const Button = ({ title, width, padding, borderRadius, backgroundColor, leftIcon, type, color, onClick }) => {
    return (
        <button
            onClick={onClick}
            type={type || 'button'}
            className='custom-button'
            style={{
                width,
                padding,
                borderRadius,
                backgroundColor,
                color
            }}
        >
            {leftIcon &&
                <span>
                    {leftIcon}
                </span>
            }
            {title || "Button"}
        </button>
    )
}

export default Button