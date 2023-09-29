/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './FilterDropdowns.css';
import { useDispatch, useSelector } from 'react-redux';
import { currentFilters, setFilter } from '../../../features/products/filterSlice';

const FilterDropdowns = () => {
    const filters = useSelector(currentFilters)
    const { type, color, brand, price } = filters
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(filters);
    }, [type, color, brand, price])

    const handleSelectChange = (event) => {
        console.log(typeof (event.target.value));
        dispatch(setFilter({ ...filters, [event.target.name]: event.target.value }))
    };

    return (
        <div className="filter-dropdowns">
            <select name='type' value={type} onChange={handleSelectChange}>
                <option value="">Headphone Type</option>
                <option value="in">In-ear headphone</option>
                <option value="on">On-ear headphone</option>
                <option value="over">Over-ear headphone</option>
            </select>

            <select name='brand' value={brand} onChange={handleSelectChange}>
                <option value="">Company</option>
                <option value="boAt">boAt</option>
                <option value="JBL">JBL</option>
                <option value="Jabra">Jabra</option>
                <option value="Phillips">Phillips</option>
                <option value="Infinity">Infinity</option>
                <option value="Hammer">Hammer</option>
                <option value={'Sennheiser'}>Sennheiser</option>
                <option value={'CrossBeats'}>CrossBeats</option>
                <option value={'Sony'}>Sony</option>
            </select>

            <select name='color' value={color} onChange={handleSelectChange}>
                <option value="">Color</option>
                <option value="black">Black</option>
                <option value="brown">Brown</option>
                <option value="white">White</option>
                <option value="brown">Brown</option>
                <option value="grey">Grey</option>
                <option value="green">Green</option>

            </select>

            <select name='price' value={price} onChange={handleSelectChange}>
                <option value="">Price</option>
                <option value={JSON.stringify({ low: 0, high: 1000 })}>₹0 - ₹1,000</option>
                <option value={JSON.stringify({ low: 1000, high: 10000 })}>₹1,000 - ₹10,000</option>
                <option value={JSON.stringify({ low: 10000, high: 20000 })}>₹10,000 - ₹20,000</option>
            </select>
        </div>
    );
};

export default FilterDropdowns;
