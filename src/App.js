import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: sans-serif;
  font-size: 1.5rem;

  margin: auto;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: start;
  margin: auto;
`

const StyledMortyList = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 4rem 5rem 0 5%;
  color: ${pr => pr.theme.secondaryColor};
  background-color: ${pr => pr.theme.dangerColor};
  padding: 20px;
  border-radius: 10px;
`

const StyledMortyName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
  button {
    background-color: ${pr => pr.theme.dangerColor};
    border: 2px solid ${pr => pr.theme.secondaryColor};
    color: ${pr => pr.theme.secondaryColor};
  }
`

const App = () => {
  const [mortys, setMortys] = useState([]);
  const [currentMortyId, setCurrentMortyId] = useState(null);

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

  const openDetails = (id) => {
    setCurrentMortyId(id);
  };

  const closeDetails = () => {
    setCurrentMortyId(null);
  };

  const Morty = (props) => (
    <StyledMortyName className='morty'>
      {props.info.name}
      <button
        onClick={() =>
          props.info.id === currentMortyId
            ? closeDetails()
            : openDetails(props.info.id)
        }
      >
        Character Info
      </button>
    </StyledMortyName>
  );

  return (
    <StyledApp className='App'>
      <h1 className='Header'>Dead Morty's (Documented)</h1>
      <StyledContainer className='container'>
        <StyledMortyList className='mortyList'>
          {mortys.map((mt) => {
            return <Morty key={mt.id} info={mt} />;
          })}
        </StyledMortyList>
      
      {currentMortyId && <Character mortyId={currentMortyId} mortys={mortys} />}
      </StyledContainer>
    </StyledApp>
  );
};

export default App;
