import React from 'react'
import { Carousel } from 'react-carousel-minimal';

const ProductCarousel = ({ data }) => {

    console.log(data);
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <Carousel
            data={data}
            time={2000}
            width="100%"
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            height={'100%'}
            style={{
                textAlign: "center",
            }}
        />
    )
}

export default ProductCarousel