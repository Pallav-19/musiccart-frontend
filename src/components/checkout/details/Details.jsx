import React from 'react'
import "./Details.css"
import DetailRow from './detailRow/DetailRow'
import { products } from '../../../constants/appConstants'
import ItemDetail from './itemDetail/ItemDetail'
const Address = () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    color: 'rgba(0,0,0,0.75)'
                }}>
                <small>
                    Pallav Patra
                </small>
                <small>
                    55
                </small>
                <small>
                    VSSUT, Burla, Sambalpur
                </small>
                <small>
                    Odisha, 768018
                </small>
            </div>
        </>
    )
}
const Payment = () => {
    return (
        <small
            style={{
                color: 'rgba(0,0,0,0.75)'
            }}
        >
            Pay on delivery (Cash/Card)

        </small>
    )
}
const Details = () => {
    return (
        <div
            className='details-list'
        >
            <DetailRow element1={'1. Delivery address'} element2={<Address />} />
            <hr />
            <DetailRow element1={'2. Payment Method'} element2={<Payment />} />
            <hr />
            <DetailRow element1={'3. Review items and delivery'} element2={<>

                {
                    products?.result?.map(x => (

                        <ItemDetail />
                    ))
                }
            </>} />
            <hr />
            <div
                style={{
                    border: '1px solid #333',
                    
                    
                }}
            >

            </div>
        </div>
    )
}

export default Details