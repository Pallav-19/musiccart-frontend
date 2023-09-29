import React from 'react'
import "./AuthBottomLine.css"
const AuthBottomLine = ({ title }) => {
    return (
        <small
            className='auth-bottom-line'
        >
            {title}
        </small>
    )
}

export default AuthBottomLine