import React from 'react'
import Button from '../components/button/Button'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate('')
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
                gap: '1rem'
            }}
        >
            <h2>
                404 | Page Not Found
            </h2>
            <Button
                title={'Go Back'}
                width={'10rem'}
                onClick={() => {
                    navigate(-1)
                }}
            />
        </div>
    )
}

export default PageNotFound