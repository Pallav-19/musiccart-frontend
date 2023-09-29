import React, { useState } from 'react';
import './FilterDropdowns.css';

const FilterDropdowns = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="filter-dropdowns">
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Headphone Type</option>
                <option value="in">In-ear headphone</option>
                <option value="on">On-ear headphone</option>
                <option value="over">Over-ear headphone</option>
            </select>

            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Company</option>
                <option value="boAt">boAt</option>
                <option value="JBL">JBL</option>
                <option value="Jabra">Jabra</option>
                <option value="Phillips">Phillips</option>

            </select>

            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Color</option>
                <option value="black">Black</option>
                <option value="brown">Brown</option>
                <option value="white">White</option>
                <option value="brown">Brown</option>

            </select>

            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Price</option>
                <option value={{ low: 0, high: 1000 }}>₹0 - ₹1,000</option>
                <option value={{ low: 1000, high: 10000 }}>₹1,000 - ₹10,000</option>
                <option value={{ low: 10000, high: 20000 }}>₹10,000 - ₹20,000</option>
            </select>
        </div>
    );
};

export default FilterDropdowns;
