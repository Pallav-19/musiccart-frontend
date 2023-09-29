import React from 'react'
import './Header.css'
import { BsFillTelephoneFill } from "react-icons/bs"
import SearchBarMini from '../miscellaneous/searchBar/Search'
const DeskTopHeader = () => {
    return (
        <div>

        </div>
    )

}
const Header = () => {
    return (
        <>
        <SearchBarMini/>
        <header className='header'>
            <span>
                <BsFillTelephoneFill
                    style={{ marginRight: '0.5rem' }} />999999999</span>
            <span>Get 50% off on selected items | Shop Now</span>
            <span>Logout</span>
        </header>
        </>
        
    )
}

export default Header