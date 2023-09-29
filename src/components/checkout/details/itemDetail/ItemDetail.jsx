import React from 'react'
import './ItemDetail.css'
const ItemDetail = () => {
    return (
        <div
            className='item-detail'
        >
            <div
                className='image-box'
            >

            </div>
            <b>
                Sony WH-CH720N
            </b>
            <small
                style={{
                    color: 'rgba(0,0,0,0.75)'
                }}
            >
                Color: Black
            </small>
            <small
                style={{
                    color: 'rgba(0,0,0,0.75)'
                }}
            >
                In Stock
            </small>
        </div>
    )
}

export default ItemDetail