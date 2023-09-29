import React from 'react'
import HomeLayout from '../components/layouts/home/HomeLayout'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <HomeLayout>
            <Outlet />
        </HomeLayout>
    )
}

export default Home