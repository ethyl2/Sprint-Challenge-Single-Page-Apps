import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        const winners = response.data.results.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(winners);
      })
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <section className="character-list">
      <form>
        <label htmlFor="name">Search: </label>
        <input id='name' type='text' name='name' placeholder='search' onChange={handleChange} value={searchTerm} />
      </form>
      <div>
        {searchResults.map(character => {
          return (
            <div key={character.id}>
              <h2>{character.name}</h2>
              <h3>Status: {character.status}</h3>
              <h3>Species: {character.species}</h3>
              <h3>Type: {character.type}</h3>
              <h3>Gender: {character.gender}</h3>
            </div>
          )

        } 

        )}
      </div>
    </section>
  );
}
