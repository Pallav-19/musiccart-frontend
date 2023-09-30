import React from 'react'
import "./HomeLayout.css"
import Navbar from '../../navbar/Navbar'
import Appbar from '../../MenuBar/Appbar'
const HomeLayout = ({ children }) => {
    return (
        <div
            className='home'
        >
            <Navbar />
            {children}
            <Appbar />
        </div>
    )
}

export default HomeLayout