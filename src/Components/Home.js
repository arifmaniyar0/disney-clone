import React from 'react'
import styled from 'styled-components'
import Content from './Content';
import Header from './Header';
import Slider from './Slider';

export default function Home() {
    return (
        <Container>
            <Header />
            {/* <div>assfks hawdaklkashfksjdhkjsdglskedsa</div> */}
            <Slider />
            <Content />
        </Container>
    )
}


const Container = styled.div`
`;
