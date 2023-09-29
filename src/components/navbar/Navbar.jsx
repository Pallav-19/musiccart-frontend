import React from 'react'
import "./Navbar.css"
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'
import Button from '../button/Button'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/cart')
    }
    return (
        <div
            className='navbar'
        >
            <div>
                <p
                    style={{
                        color: '#2E0052',
                        fontSize: "1.5rem"
                    }}>
                    <BsFillFileEarmarkMusicFill
                        style={{ marginRight: '0.5rem', color: '#E794CE ' }} />
                    Musicart
                </p>
            </div>
            <div>
                <Button
                    title={'View Cart'}
                    padding={'0.5rem 1.2rem'}
                    backgroundColor={'#1D7000'}
                    leftIcon={<AiOutlineShoppingCart />}
                    borderRadius={'3rem'}
                    onClick={handleClick}
                />
            </div>
        </div >
    )
}

export default Navbar