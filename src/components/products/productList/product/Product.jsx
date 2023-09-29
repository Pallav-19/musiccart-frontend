import React from 'react'
import './Product.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { currentViewMode } from '../../../../features/utils/viewSlice'
import Button from '../../../button/Button'
import { useNavigate } from 'react-router-dom'
const Product = ({ background, name, price, color, type, longDescription, id }) => {
    const viewMode = useSelector(currentViewMode)
    const navigate = useNavigate()
    const isListView = viewMode === 'list'
    const listView = isListView ? {
        flexDirection: 'row',
        width: '100vw',
        gap: '2.5rem'

    } : {}
    return (
        <div
            className='contanier'
            style={listView}
            onClick={() => {
                navigate(`/${id}`)

            }}
        >
            <div
                className='image-container'
                style={{
                    backgroundImage: `url(${background})`,
                    width: isListView && '14vw'
                }}
            >
                <BsFillCartPlusFill

                    style={{
                        position: 'absolute',
                        right: '10%',
                        bottom: '10%',
                        zIndex: 5,
                        color: '#1D7000',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        border: '1px solid rgba(0,0,0,0.3)',
                        fontSize: '2rem',
                        padding: '0.3rem',
                        boxShadow: '1px 2px 5px rgba(0,0,0,0.3)'
                    }}
                />
            </div>
            <div
                className='info-container'
                style={{
                    height: isListView && "100%",
                    width: isListView && "70vw",
                    gap: isListView && '0.5rem',
                    padding: isListView && '1rem'
                }}
            >
                <p
                    style={{
                        fontSize: isListView && "1.2rem",
                    }}
                    className='para' >{name || "name"}</p>

                <p style={{
                    fontSize: isListView && "0.9rem",
                    fontWeight: isListView && 400,
                }} className='para' >Price - ₹{price || 1000}</p>

                <p style={{
                    fontSize: isListView && "0.9rem",
                    fontWeight: isListView && 400,
                }} className='para' >{color || "Color"} | {type}{" "}headphone</p>

                {isListView && <p className='para' >{longDescription}</p>}
                {isListView && <Button
                    width={'6rem'}
                    title={'Details'}
                    borderRadius={'3rem'}
                />}
            </div>
        </div>
    )
}

export default Product