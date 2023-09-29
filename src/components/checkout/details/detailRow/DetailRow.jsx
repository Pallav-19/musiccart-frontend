import React from 'react'
import './DetailRow.css'
const DetailRow = ({ element1, element2 }) => {
    return (
        <div
            className='detail'
        >
            <div
                style={{
                    flex: 1,
                    height: '100%'
                }}
            >
                <p
                    style={{
                        color: '#B52B00',
                        fontSize: '1.1rem',
                        fontWeight: 600
                    }}
                >
                    {element1}
                </p>
            </div>
            <div
                style={{
                    flex: 1,
                }}>
                {element2}
            </div>
        </div>
    )
}

export default DetailRow