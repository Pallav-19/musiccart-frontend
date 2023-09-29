import React from 'react'
import "./HomeLayout.css"
import Navbar from '../../navbar/Navbar'
const HomeLayout = ({ children }) => {
    return (
        <div
            className='home'
        >
            <Navbar />
            {children}
        </div>
    )
}

export default HomeLayout