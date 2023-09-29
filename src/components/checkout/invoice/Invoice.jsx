import React from 'react'
import "./Invoice.css"
import Button from '../../button/Button'
import { useNavigate } from 'react-router-dom'
const Invoice = () => {
    const navigate = useNavigate('')
    return (
        <div
            className='invoice'
        >
            <Button
                title={'Place your order'}
                backgroundColor={"#FFD600"}
                color={"#000"}
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/checked-out')
                }}
            />
            <small>
                By placing your order, you agree to Musicart privacy notice and conditions of use.
            </small>
            <hr />
            <b>
                Order Summary
            </b>
            <p>
                Items
            </p>
            <p>
                Delivery
            </p>
            <hr
                style={{
                    marginTop: 'auto'
                }}
            />
            <b>
                Order Total:
            </b>
        </div>
    )
}

export default Invoice