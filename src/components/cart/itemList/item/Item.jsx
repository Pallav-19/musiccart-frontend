import React from 'react'
import "./Item.css"
const Item = () => {
    return (
        <div
            className='item'
        >
            <div
                className='image-box'
            >

            </div>

            <div
                className='item-data'>
                <b>
                    Sony WH-4325
                </b>
                <small

                >
                    Colour :Black
                </small>
                <small

                >
                    In Stock
                </small>
            </div>
            <div
                className='item-data'>
                <b>
                    Price
                </b>
                <small

                >
                    ₹1000
                </small>
            </div>
            <div
                className='item-data'>
                <b>
                    Quantity
                </b>
                <select
                    style={{
                        padding: "0.2rem",
                        borderRadius: '0.2rem'

                    }}
                >
                    {
                        [1, 2, 3, 4, 5, 6].map(x => (
                            <option value={x} >{x}</option>
                        ))

                    }
                </select>

            </div>
            <div
                className='item-data'>
                <b>
                    Total
                </b>
                <small

                >
                    ₹4000
                </small>
            </div>
        </div>

    )
}

export default Item