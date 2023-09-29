import React from 'react'
import "./Details.css"
import DetailRow from './detailRow/DetailRow'
import { products } from '../../../constants/appConstants'
import ItemDetail from './itemDetail/ItemDetail'
import Button from '../../button/Button'
import { useNavigate } from 'react-router-dom'
const Address = () => {

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    color: 'rgba(0,0,0,0.75)'
                }}>
                <small>
                    Pallav Patra
                </small>
                <small>
                    55
                </small>
                <small>
                    VSSUT, Burla, Sambalpur
                </small>
                <small>
                    Odisha, 768018
                </small>
            </div>
        </>
    )
}
const Payment = () => {
    return (
        <small
            style={{
                color: 'rgba(0,0,0,0.75)'
            }}
        >
            Pay on delivery (Cash/Card)

        </small>
    )
}
const Details = () => {
    const navigate = useNavigate('')
    return (
        <div
            className='details-list'
        >
            <DetailRow element1={'1. Delivery address'} element2={<Address />} />
            <hr />
            <DetailRow element1={'2. Payment Method'} element2={<Payment />} />
            <hr />
            <DetailRow element1={'3. Review items and delivery'} element2={<>

                {
                    products?.result?.map(x => (

                        <ItemDetail />
                    ))
                }
            </>} />
            <hr />
            <div
                style={{
                    border: '1px solid rgba(3,3,3,0.34)',
                    display: 'flex',
                    padding: '0.6rem',
                    gap: '1rem',
                    borderRadius: '0.8rem'
                }}
            >
                <div
                    style={{
                        flex: 1
                    }}
                >

                    <Button

                        color={'#000'}
                        backgroundColor={"#FFD600"}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/checked-out')
                        }}
                        title={'Place your order'}
                        padding={'0.5rem 0.3rem'}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'

                    }}
                >
                    <b
                        style={{
                            color: '#B52B00'
                        }}
                    >
                        Order Total: ₹3500
                    </b>
                    <small>
                        By placing your order, you agree to Musicart privacy notice and conditions of use.
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Details