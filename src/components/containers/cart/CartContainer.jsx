import React from 'react'
import "./CartContainer.css"
const CartContainer = ({ children }) => {
    return (
        <div
            className='container'
        >{children}</div>
    )
}

export default CartContainer