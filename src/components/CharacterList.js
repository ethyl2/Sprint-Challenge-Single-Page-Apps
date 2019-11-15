import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';

const CardsBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: stretch;
  justify-items: center;
`;

const ButtonContainer = styled.div`
  width: 50%;
  margin 1.5rem auto;
  font-family: 'Gaegu', cursive;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  button {
    padding: 0.5rem;
    margin: 0.25rem;
    font-family: 'Gaegu', cursive;
  }
`;


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(`page=1`);

  function getPage(direction) {
    const numberPattern = /\d+/g;
    let num = page.match(numberPattern);
    //console.log(num);
    (direction === "next")? num++ : num--;
  
    if (num > 25) {
      num = 1;
    }
    if (num < 1) {
      num = 25;
  }
    //console.log(num);
    setPage(`page=${num}`);  
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/?${page}`)
      .then(response => {
        //console.log(response.data.results);
        const winners = response.data.results.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(winners);
      })
  }, [searchTerm, page]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <section className="character-list">
      <SearchForm handleChange={handleChange} searchTerm={searchTerm} />
      <ButtonContainer>
              <button onClick={() => getPage("previous")}>⬅️ Previous Page</button>
              <button onClick={() => getPage("next")}>Next Page ➡️</button>
      </ButtonContainer>
      <CardsBox>
        {searchResults.map(character => {
          return (
            <CharacterCard character={character} key={character.id}/>
          )} 

        )}
      </CardsBox>
    </section>
  );
}
