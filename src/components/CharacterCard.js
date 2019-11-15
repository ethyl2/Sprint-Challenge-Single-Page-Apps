import React from "react";
import styled from 'styled-components';

const CardDiv = styled.div`
  width: 31%;
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 3px 5px 3px 3px #888888;
  font-family: 'Gaegu', cursive;
  margin-bottom: 2rem;
  h2 {
    background: #0CB0C1;
    margin: 0;
    padding: 1rem;
    text-align: center;
  }
  h3 {
    padding-left: 1rem;
    line-height: 1.1rem;
  }
`;

const ImgContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

export default function CharacterCard( {character} ) {
  return (
    <CardDiv >
      <h2>{character.name}</h2>
      <h3>Status: {character.status}</h3>
      <h3>Species: {character.species}</h3>
      { character.type ? <h3>Type: {character.type}</h3> : null }
      <h3>Gender: {character.gender}</h3>
      <ImgContainer>
        <img src={character.image} alt={character.name} />
      </ImgContainer>
    </CardDiv>
  );
}
