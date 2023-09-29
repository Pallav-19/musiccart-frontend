import React from 'react'
import CartContainer from '../components/containers/cart/CartContainer'
import Button from '../components/button/Button'
import Details from '../components/checkout/details/Details'
import Invoice from '../components/checkout/invoice/Invoice'

const Checkout = () => {
    return (
        <>
            <div
                style={{
                    marginRight: 'auto',
                    width: '100%'
                }}
            >
                <Button
                    width={'8rem'}
                    title={'Go back to cart'}

                />
            </div>
            <h2>
                Checkout
            </h2>
            <CartContainer>
                <Details />
                {/* <Invoice /> */}
            </CartContainer>
        </>
    )
}

export default Checkout