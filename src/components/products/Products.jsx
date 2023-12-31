import React from 'react'
import Banner from '../miscellaneous/banner/Banner'
import SearchBar from '../miscellaneous/searchBar/SearchBar'
import MenuBar from '../MenuBar/MenuBar'
import ProductsList from './productList/ProductsList'
import SearchBarMini from '../miscellaneous/searchBar/Search'

const Products = () => {
    return (
        <>
            <SearchBarMini/>
            <Banner />
            <SearchBar />
            <MenuBar />
            <ProductsList />
        </>
    )
}

export default Products