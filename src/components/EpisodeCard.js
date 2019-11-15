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

export default function LocationCard({ item }) {
  return (
    <CardDiv >
      <h2>{item.name}</h2>
      <h3>Air Date: {item.air_date}</h3>
      <h3>Episode: {item.episode}</h3>
      <h3>Number of Characters: {item.characters.length}</h3>
    </CardDiv>
  );
}
