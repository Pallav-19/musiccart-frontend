import React, { useState } from 'react';
import './SortDropdown.css';

const SortDropdown = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="sort-dropdowns">
            <select className='sort' value={selectedOption} onChange={handleSelectChange}>
                <option value="">Sort by: featured</option>
                <option value="option1">Sort by: featured</option>
                <option value="option2">Sort by: featured</option>
                <option value="option3">Sort by: featured</option>
            </select>
        </div>
    );
};

export default SortDropdown;
