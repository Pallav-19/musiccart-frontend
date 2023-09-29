import React from 'react'
import { BsBag } from 'react-icons/bs'
import CartContainer from '../components/containers/cart/CartContainer'
import ItemList from '../components/cart/itemList/ItemList'
import Bill from '../components/cart/bill/Bill'
const Cart = () => {
    return (
        <>
            <h2>
                <BsBag />  My Cart
            </h2>
            <CartContainer>
                <ItemList />
                <Bill />

            </CartContainer>

        </>
    )
}

export default Cart