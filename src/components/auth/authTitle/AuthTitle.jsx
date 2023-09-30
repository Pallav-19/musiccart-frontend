import React from 'react'
import "./AuthTitle.css"
const AuthTitle = ({ title }) => {
    return (
        <>
            <b
                className='little-auth-title'
            >
                {title === 'Sign up' ? "Sign Up" : "Sign In"}
            </b>
            <p
                className='auth-title'
            >{
                    title
                }

            </p>
        </>
    )
}

export default AuthTitle