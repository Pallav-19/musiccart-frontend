import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ title, to, needBorder }) => {
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <p
                style={{
                    fontSize: "0.85rem",
                    width: '30vw',
                    padding: '0.6rem',
                    textAlign: 'center',
                    textDecoration: needBorder ? 'none' : 'underline',
                    border: needBorder && '1px solid #333',
                    color: '#333',
                    borderRadius: '0.5rem',

                }}
            >
                {title}
            </p>
        </Link>
    )
}

export default LinkButton