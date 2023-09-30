import React from 'react'
import './Header.css'
import { BsFillTelephoneFill } from "react-icons/bs"
import SearchBarMini from '../miscellaneous/searchBar/Search'
import { useDispatch, useSelector } from 'react-redux'
import { currentToken } from '../../features/auth/authSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../../api/auth/authApiSlice'
import { logout as clearCredentials } from '../../features/auth/authSlice'
const Header = () => {
    const token = useSelector(currentToken)
    const navigate = useNavigate()
    const location = useLocation()
    const [logout] = useLogoutMutation()
    const dispatch = useDispatch()
    const handleLogout = async () => {
        try {
            await logout()
            dispatch(clearCredentials())
        } catch (error) {

        }
    }
    return (
        <>
            <SearchBarMini />
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
                            !token ? navigate('/login') : handleLogout()
                        }}
                    >{token ? 'Logout' : 'Login'}</span>
                </header>}
            </>
        </>

    )
}

export default Header