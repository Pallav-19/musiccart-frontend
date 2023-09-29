import React, { useEffect, useState } from 'react'
import ProductCarousel from '../../miscellaneous/carousel/ProductCarousel'
import Button from '../../button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../../../constants/appConstants'

const ViewProduct = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    console.log(products?.result?.find(x => x._id === id));
    const navigate = useNavigate('')
    useEffect(() => {
        const fetch = async () => {
            try {
                const found = products?.result?.find(x => x._id === id)
                setProduct(found)
                console.log(id, found);
            } catch (error) {

            }
            finally {
                setLoading(false)
            }
        }
        fetch()
    }, [id])
    if (loading) return <p>loading...</p>
    return (
        <>
            <div
                style={{
                    width: '100%',
                }}
            >
                <Button width={'8rem'} title={'Back to Products'}
                    onClick={() => {
                        navigate('/')
                    }}
                />
            </div>
            <div
                style={{
                    width: '100%',
                    fontWeight: 500,
                    fontSize: '1.3rem',
                    wordWrap: 'break-word'

                }}
            >
                <p>
                    {product?.longDescription}
                </p>
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    gap: '3rem'
                }}
            >
                <div
                    style={{
                        width: '50%'
                    }}
                    className='carousel-box'>
                    <ProductCarousel
                        data={product?.images.map(x => ({ image: x }))}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        wordBreak: 'break-word',
                        width: '50%'
                    }}
                    className='info-box'>
                    <p
                        style={{
                            fontSize: "1.7rem",
                            fontWeight: 500,
                            marginBottom: '1rem'
                        }}
                    >
                        {product?.name}
                    </p>
                    <p>
                        {'⭐⭐⭐⭐⭐'.slice(0, product?.rating)}{" "}{`(${product?.reviews} reviews)`}
                    </p>
                    <b>
                        {`Price -  ₹${product?.price}`}
                    </b>
                    <p>
                        {`${product?.color} | ${product?.type} headphone`}
                    </p>
                    <b>
                        About this item
                    </b>
                    <ul
                        style={{
                            wordBreak: 'break-word',
                            marginLeft: '2rem'
                        }}
                    >
                        {
                            product?.about?.map(x => (
                                <li
                                    style={{
                                        marginBottom: '1rem'
                                    }}
                                >
                                    {x}
                                </li>
                            ))
                        }
                    </ul>
                    <p
                    >
                        <b>
                            Available -
                        </b>
                        <span>
                            {product?.isAvailable ? 'Yes' : 'No'}
                        </span>
                    </p>
                    <p
                    >
                        <b>
                            Featured -
                        </b>
                        <span>
                            {product?.isFeatured ? 'Yes' : 'No'}
                        </span>
                    </p>
                    <Button
                        title={'Add to cart'}
                        backgroundColor={'#FFD600'}
                        color={'#000'}
                        width={'18vw'}
                        borderRadius={'3rem'}
                    />
                    <Button
                        title={'Buy Now'}
                        backgroundColor={'#FFB800'}
                        color={'#000'}
                        width={'18vw'}
                        borderRadius={'3rem'}
                    />
                </div>
            </div>
        </>
    )
}

export default ViewProduct