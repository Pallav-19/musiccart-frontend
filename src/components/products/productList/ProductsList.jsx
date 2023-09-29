import React from 'react'
import { products } from '../../../constants/appConstants'
import Product from './product/Product'
import "./ProductsList.css"
const ProductsList = () => {
    return (
        <div
            className='product-list'
        >
            {
                products?.result?.map(x =>
                (<>
                    <Product
                        key={x?._id}
                        background={x?.images[0]}
                        type={x?.type}
                        color={x?.color}
                        price={x?.price}
                        name={x?.name}
                        longDescription={x?.longDescription}
                        id={x?._id}
                    />
                </>)
                )
            }
        </div>
    )
}

export default ProductsList