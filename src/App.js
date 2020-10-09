import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [mortys, setMortys] = useState([]);
  const [currentMortyId, setCurrentMortyId] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/?name=morty&status=dead")
      .then((res) => {
        setMortys(res.data.results);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  // console.log(mortys);

  const openDetails = (id) => {
    setCurrentMortyId(id);
    // console.log(currentMortyId)
  };

  const closeDetails = () => {
    setCurrentMortyId(null);
  };

  const Morty = (props) => (
    <div className='morty'>
      {props.info.name}
      <button onClick={() => (
        props.info.id === currentMortyId ? closeDetails() : openDetails(props.info.id))}>Character Info</button>
    </div>
  );

  return (
    <div className='App'>
      <h1 className='Header'>Dead Morty's (Documented)</h1>
      {mortys.map((mt) => {
        return <Morty key={mt.id} info={mt} />;
      })}
      {
        currentMortyId && <Character mortyId={currentMortyId} mortys={mortys} />
      }
    </div>
  );
};

export default App;
