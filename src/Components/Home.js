import React from 'react'
import styled from 'styled-components'
import Content from './Content';
import Header from './Header';
import Slider from './Slider';
import Aos from 'aos'

export default function Home() {

    React.useEffect(() => {
        Aos.init({ duration: 3000 });
    },[])
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
