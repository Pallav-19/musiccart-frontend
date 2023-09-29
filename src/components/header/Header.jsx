import React from 'react'
import './Header.css'
import { BsFillTelephoneFill } from "react-icons/bs"
import { useSelector } from 'react-redux'
import { currentToken } from '../../features/auth/authSlice'
import { useLocation, useNavigate } from 'react-router-dom'
const Header = () => {
    const token = useSelector(currentToken)
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <>
            {!(location.pathname.includes('login') || location.pathname.includes('register')) && <header className='header'>
                <span>
                    <BsFillTelephoneFill
                        style={{ marginRight: '0.5rem' }} />999999999</span>
                <span>Get 50% off on selected items | Shop Now</span>
                <span
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        cursor: 'pointer'
                    }}
                    onClick={(e) => {
                        e.preventDefault()
                        !token && navigate('/login')
                    }}
                >{token ? 'Logout' : 'Login'}</span>
            </header>}
        </>
    )
}

export default Header