import React from "react";

export default function CharacterCard( {character} ) {
  return (
    <div >
      <h2>{character.name}</h2>
      <h3>Status: {character.status}</h3>
      <h3>Species: {character.species}</h3>
      <h3>Type: {character.type}</h3>
      <h3>Gender: {character.gender}</h3>
    </div>
  );
}
