import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Characters from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [mortys, setMortys] = useState([])
const [currentMortyId, setCurrentMortyId] = useState(null)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/?name=morty&status=dead')
    .then(res => {
      setMortys(res.data)
    })
    .catch(err => {
      debugger
    })
  }, [])




  return (
    <div className="App">
      <h1 className="Header">Dead Morty's (Documented)</h1>
    </div>
  );
}

export default App;
