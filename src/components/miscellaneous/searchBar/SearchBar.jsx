import React from 'react'
import './SearchBar.css'
const SearchBar = () => {
    return (
        <div
            className='search'
        >
            <input
                style={{
                    padding: '0.8rem'
                }}
                placeholder={'🔍  Search For Products'}

            />
        </div>
    )
}

export default SearchBar