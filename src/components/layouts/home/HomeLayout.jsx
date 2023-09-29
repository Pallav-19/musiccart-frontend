import React from 'react'
import "./HomeLayout.css"
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/FooterComponent'
import Appbar from '../../MenuBar/Appbar'
const HomeLayout = ({ children }) => {
    return (
        <div
            className='home'
        >
            <Navbar />
            {children}
            <Footer/>
            <Appbar/>
        </div>
    )
}

export default HomeLayout