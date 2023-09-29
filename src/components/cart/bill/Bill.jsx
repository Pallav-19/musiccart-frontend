import React from 'react'
import './Bill.css'
import Button from '../../button/Button'
const Bill = () => {
    return (
        <div
            className='bill'
        >
            <b
                style={{
                    marginBottom: '0.8rem'
                }}
            >
                Price Details
            </b>
            <div className='bill-box'>

                <b>
                    Total MRP
                </b>
                <p>
                    ₹1000
                </p>
            </div>
            <div className='bill-box'>

                <b>
                    Discount on MRP
                </b>
                <p>
                    ₹0
                </p>
            </div>
            <div className='bill-box'>

                <b>
                    Convenience Fee
                </b>
                <p>
                    ₹45
                </p>
            </div>
            <div
                style={{
                    marginTop: 'auto'
                }}
                className='bill-box'>

                <b>
                    Total
                </b>
                <p>
                    ₹1045
                </p>
            </div>
            <Button
                title={'Place Order'}
                backgroundColor={'#FFD600'}
                padding={'0.5rem 0.8rem'}
                color={'#000'}
            />
        </div>
    )
}

export default Bill