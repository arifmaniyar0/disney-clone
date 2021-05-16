import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from './images/slider1.jpg'
import img2 from './images/slider2.jpg'
import img3 from './images/slider3.jpg'
import img4 from './images/slider4.jpg'

export default function Sliderr() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
        <Container>
            <Carousel {...settings} {...{autoplay: true,autoplaySpeed:4000}}>
                <ImageContainer>
                    <SliderImage src={`${img1}`} />
                </ImageContainer>
                <ImageContainer>
                    <SliderImage src={`${img2}`} />
                </ImageContainer>
                <ImageContainer>
                    <SliderImage src={`${img3}`} />
                </ImageContainer>
                <ImageContainer>
                    <SliderImage src={`${img4}`} />
                </ImageContainer>
            </Carousel>
        </Container>
    )
}


const Container = styled.div`
box-sizing: border-box;
margin-bottom: 40px;
`
const Carousel = styled(Slider)`
`
const ImageContainer = styled.div`
max-width: 400px;
width: 100vw;
`

const SliderImage = styled.img`
width: 100vw;
max-height: 300px;
object-fit: cover;
background-position: center;
@media(max-width: 720px) {
    height: 200px
}
`
