import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const StyledInfo = styled.div`
    
`


export default function Character(props) {
  const { mortyId, mortys } = props;
  const [charInfo, setCharInfo] = useState([]);

  useEffect(() => {
    mortys.forEach(
      (mt) => {
        if (mt.id === mortyId) {
          setCharInfo(mt);
        }
      },
      [mortyId]
    );
  });

//   console.log(charInfo);
  // setCharInfo(mortys[mortyId]);
  // console.log (charInfo)
  return (
    <StyledInfo className='mortyInfo'>
      <h2>{charInfo.name}</h2>
      <img src={charInfo.image} alt='charInfo.name' />
      <p>species: {charInfo.species}</p>
      <p>status: {charInfo.status}</p>
    </StyledInfo>
  );
}
