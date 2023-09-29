import React from 'react'
import "./ItemList.css"
import { products } from '../../../constants/appConstants'
import Item from './item/Item'
const ItemList = () => {
    return (
        <div
            className='item-list'
        >
            {
                products?.result?.map(x =>
                (<>
                    <Item />

                </>)
                )
            }
            <hr />
            <div
                className='total-bottom'
            >
                <b>
                    20 items
                </b>
                <p>
                    ₹3000
                </p>
            </div>
        </div>
    )
}

export default ItemList