import React from 'react'
import styled from 'styled-components'


export default function Header() {
    return (
        <Container>
            <Logo src={'https://cdn.worldvectorlogo.com/logos/disney-wbackground.svg'} width={90}></Logo>
            <MenuBar>
                <h3>TV</h3>
                <h3>Movies</h3>
                <h3>Sports</h3>
                <h3>News</h3>
                <h3>Kids</h3>
            </MenuBar>
            <Login>Login</Login>
        </Container>
    )
}

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #020917;
padding: 0.7rem 2rem;
box-shadow: 1px 1px #a2a2a2;
box-sizing: border-box;
width: 100vw;

`

const Logo = styled.img`
@media(max-width: 720px) {
    width: 50
}`
const MenuBar = styled.div`
display: grid;
align-items: center;
grid-auto-flow: column;
justify-self: flex-start;
grid-gap: 2rem;
h3 {
    font-weight: 300;
}
@media(max-width: 720px) {
    display: none
}
`
const Login = styled.button`
padding: 8px;
border: 1px solid white;
outline: none;
border-radius: 5px;
letter-spacing: 2px;
font-size: 0.8rem;
font-weight: 500;

&:hover {
    background-color: white;
}
@media(max-width: 720px) {
    padding: 5px
    border: 2px solid white
}
`
