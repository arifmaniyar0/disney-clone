import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {auth, googleAuthProvider } from '../firebase'
import { useSelector, useDispatch } from 'react-redux'

export default function Header() {
    const [loading, setLoading] = useState(true);
    const [User, setUser] = useState();

    const state = useSelector(s => s);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log(state, user)
            if(user) {
                // console.log('user', user)
                setUser(user)
            }
            dispatch({ type: 'User', payload: user })
            setLoading(false)
        })
    },[User])

    // if(loading) {
    //     return (
    //         <Loader>
    //             <LoaderIcon />
    //         </Loader>
    //     )
    // }

    const loginClick = () => {
        auth.onAuthStateChanged(user => {
                if(!user) {
                    auth.signInWithPopup(googleAuthProvider)
                }
            else {
                setUser(user)
            }
        })
    }

    const toggleSignOut = () => {
        console.log(document.getElementById('signoutbtn').style.display)
        document.getElementById('signoutbtn').style.display === 'block' ?
        document.getElementById('signoutbtn').style.display = 'none' :
        document.getElementById('signoutbtn').style.display = 'block'
    }
    return (
        loading ? 
        <Loader>
            <LoaderIcon />
        </Loader>
        :
        <Container>
            <Logo src={'https://cdn.worldvectorlogo.com/logos/disney-wbackground.svg'} width={90}></Logo>
            <MenuBar>
                <h3>TV</h3>
                <h3>Movies</h3>
                <h3>Sports</h3>
                <h3>News</h3>
                <h3>Kids</h3>
            </MenuBar>
            {
                !User ? 
                <Login onClick={() => loginClick()}>Sign In</Login>
                : <UserContainer>
                    <UserImage src={User.photoURL} onClick={() => toggleSignOut()} />
                    <SignOut id='signoutbtn' onClick={async () => {await auth.signOut();setUser(null)}}>Sign Out</SignOut>
                </UserContainer>

            }
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
const UserImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`

const Loader = styled.div`
display: grid;
place-items: center;
width: 100vw;
height: 100vh;
background-color: gray;
background-color: #020917;
overflow: hidden;
`

const LoaderIcon = styled.span`
border: 10px solid white;
border-bottom-color: red;
background-color: #020917;
width: 100px;
height: 100px;
border-radius: 50%;
animation: spinner 1.4s linear infinite;
trnsition: all 0.4s linear;

@keyframes spinner {
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
}
`

const UserContainer = styled.div`
    position: relative;
`

const SignOut = styled.button`
background-color: #020917;
padding: 5px;
font-size: 0.8rem;
text-align: center;
position: absolute;
left: -50px;
bottom: -30px;
width: max-content;
color: white;
z-index: 100;
display: none;
`