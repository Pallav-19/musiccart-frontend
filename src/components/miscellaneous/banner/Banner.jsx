import React from 'react'
import "./Banner.css"
import bannerImage from "../../../assets/images/WhatsApp_Image_2023-09-28_at_22.56.03-removebg-preview.png"
import Button from '../../button/Button'
const Banner = () => {
    return (


        <div
            className='banner-container'
        >
            <div className='text-box'>
                <p
                    style={{
                        margin: 0,
                        padding: 0,
                    }}
                >
                    Grab upto 50% off on Selected headphones
                </p>
                <Button title={'Buy Now'} width={"auto"} padding={'0.6rem 2rem'} borderRadius={"3rem"} />
            </div>
            <div className='img-box'>
                <img src={bannerImage} alt='banner_img'>

                </img>
            </div>
        </div>

    )
}

export default Banner