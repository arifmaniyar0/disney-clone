import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img1 from './images/slider1.jpg'
// import Aos from 'aos'
// import 'gsap/dist/CSSRulePlugin.css'
import {TimelineLite} from 'gsap'

export default function Content() {
    const [list, setList] = useState(null);
    const t1 = new TimelineLite({ duration: 0 })
    useEffect(() => {
        fetch('https://api.disneyapi.dev/characters?page=2').then(res => res.json())
        .then(data => setList(data.data))

    },[])
    

    useEffect(() => {
        if(!list) return;
        // console.log(t1)
        // t1.to('.cardtest',{ y: '10px', stagger: 0.1 })
    },[list])


    return (
        <Container>
            <Header data-aos="zoom-in">Latest & Trending</Header>
            <CardContainer>
                {
                    list && list.slice(0, 10).map(l => (
                        <Card key={l._id} style={{backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <div>
                                {l.films.length > 0 ? l.films[0] : l.name}
                            </div>
                        </Card>
                    ))
                }
            </CardContainer>
        </Container>
    )
}


const Container = styled.div`

`

const Header = styled.h3`
font-size: 1.5rem;
margin-bottom: 2rem;
`

const CardContainer = styled.div`
display: grid;
padding: 0 30px;
grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
grid-gap: 1.5rem;
align-items: center;
justify-content: space-around;
width: 100vw;
margin: 0 0 1.5rem;
`


const Card = styled.div`
border-radius: 8px;
// border: 1px solid black;
box-shadow: 1px 1px 2px black;
width: 200px;
height: 250px;
position: relative;
transition: all 0.3s ease-in;
transition-delay: 0.3s;


&:hover {
    transform: scale(1.2);
    // mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);
    div {
        transition-delay: 0.3s;
        visibility: visible;
        opacity: 1;
        z-index: 10px;
    }
}
div {
    transition: all 0.3s ease-in;
    position: absolute;
    bottom: 10px;
    left: 10%;
    visibility: hidden;
    opacity: 0;
}
`