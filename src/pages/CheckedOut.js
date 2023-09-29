import React from 'react'
import Button from '../components/button/Button'
import { useNavigate } from 'react-router-dom'

const CheckedOut = () => {
    const navigate = useNavigate('')
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '70vh',
                    width: '70vw',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(3,3,3,0.4)',
                    boxShadow: '1px 10px 15px rgba(0,0,0,0.2) ,1px 10px 15px rgba(0,0,0,0.2), 1px 10px 15px rgba(0,0,0,0.2)'
                }}
            >
                <p
                    style={{
                        fontSize: '5rem'
                    }}
                >
                    🎉
                </p>
                <h3>
                    Order is placed successfully!
                </h3>
                <small>
                    You will be receiving a confirmation email with order details.
                </small>
                <Button
                    title={'Go back to Home page'}
                    width={'50%'}
                    onClick={(e) => {
                        e.preventDefault()
                        navigate('/')
                    }}
                />
            </div>
        </>
    )
}

export default CheckedOut