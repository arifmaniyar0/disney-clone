import { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home';
import styled from 'styled-components'
import {auth } from './firebase'


function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  auth.onAuthStateChanged(user => {
    if(user) {}
    setLoading(false);
  })
}, [])

  if(loading) {
        return (
            <Loader>
                <LoaderIcon />
            </Loader>
        )
    }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}


const Loader = styled.div`
display: grid;
place-items: center;
width: 100vw;
height: 100vh;
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
        transform: rotate(0deg);
        // transform: scale(1);
    }
    to {
        transform: scale(1.2);
        transform: rotate(360deg);
    }
}

@media(max-width: 720px) {
  width: 50px;
  height: 50px;
  border-width: 5px;
}
`

export default App;
