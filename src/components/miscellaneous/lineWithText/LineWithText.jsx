import React from 'react';
import './LineWithText.css';

function LineWithText({ text }) {
    return (
        <div className="line-with-text">
            <i className="line" />
            <div className="text">{text}</div>
            <i className="line" />
        </div>
    );
}

export default LineWithText;
