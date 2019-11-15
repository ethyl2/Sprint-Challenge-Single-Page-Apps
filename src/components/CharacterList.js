import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

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
      <SearchForm handleChange={handleChange} searchTerm={searchTerm} />
      <div>
        {searchResults.map(character => {
          return (
            <CharacterCard character={character} key={character.id}/>
          )} 

        )}
      </div>
    </section>
  );
}
