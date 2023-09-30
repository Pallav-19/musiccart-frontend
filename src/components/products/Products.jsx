import React from 'react'
import Banner from '../miscellaneous/banner/Banner'
import SearchBar from '../miscellaneous/searchBar/SearchBar'
import MenuBar from '../MenuBar/MenuBar'
import ProductsList from './productList/ProductsList'

const Products = () => {
    return (
        <>
            <Banner />
            <SearchBar />
            <MenuBar />
            <ProductsList />
        </>
    )
}

export default Products