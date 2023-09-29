import React from 'react'
import "./AuthTitle.css"
const AuthTitle = ({ title }) => {
    return (
        <p
            className='auth-title'
        >{
                title
            }</p>
    )
}

export default AuthTitle