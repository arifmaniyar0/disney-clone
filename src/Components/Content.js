import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import Aos from 'aos'
// import 'gsap/dist/CSSRulePlugin.css'
import {TimelineLite} from 'gsap'

export default function Content() {
    const [list, setList] = useState(null);
    const t1 = new TimelineLite({ duration: 0 })

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/list/1?api_key=047deca84fa39cc978bf6160fec8eec8&language=en-US').then(res => res.json())
        .then(data => setList(data.items))

    },[])
    

    useEffect(() => {
        if(!list) return;
        console.log(list)
        // t1.to('.cardtest',{ y: '10px', stagger: 0.1 })
    },[list])


    return (
        <Container>
            <Header data-aos="zoom-in">Latest & Trending</Header>
            <CardContainer>
                {
                    list && list.map(l => (
                        <Card key={l.title} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${l.poster_path || l.poster_path})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <div>
                                {l.title}
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
    // mask-image: linear-gradient(to top, transparent 1%, black 99%);
    div {
        transition-delay: 0.3s;
        visibility: visible;
        opacity: 1;
        z-index: 10px;
        mix-blend-mode: difference;
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