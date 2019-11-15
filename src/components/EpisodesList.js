import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import styled from 'styled-components';

const CardsBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: stretch;
  justify-items: center;
`;

const StyledForm = styled.form`
  width: 35%;
  margin: 1.5rem auto;
  font-family: 'Gaegu', cursive;
  font-size: 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  input {
    height: 2rem;
    margin-left: 0.5rem;
  }
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

export default function LocationsList() {
    const [searchTermEpisode, setSearchTermEpisode] = useState('');
    const [searchResultsEpisode, setSearchResultsEpisode] = useState([]);
    const [page, setPage] = useState(`page=1`);

    function getPage(direction) {
      const numberPattern = /\d+/g;
      let num = page.match(numberPattern);
      //console.log(num);
      (direction === "next")? num++ : num--;
    
      if (num > 2) {
        num = 1;
      }
      if (num < 1) {
        num = 2;
    }
      //console.log(num);
      setPage(`page=${num}`);  
    }

    useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/?${page}`)
      .then(response => {
        //console.log(response.data.results);
        const winners = response.data.results.filter(item => item.name.toLowerCase().includes(searchTermEpisode.toLowerCase()));
        setSearchResultsEpisode(winners);
      })
  }, [searchTermEpisode, page]);

  const handleChange = event => {
    setSearchTermEpisode(event.target.value);
  }

  return (
      <div>
            <StyledForm>
            <label htmlFor="name">Search: </label>
                <input id='name' type='text' name='name' placeholder=' 🔎 search' onChange={handleChange} value={searchTermEpisode} />
            </StyledForm>
            <ButtonContainer>
              <button onClick={() => getPage("previous")}>⬅️ Previous Page</button>
              <button onClick={() => getPage("next")}>Next Page ➡️</button>
            </ButtonContainer>
            <CardsBox>
            {searchResultsEpisode.map(item => {
            return (
                <EpisodeCard  key={item.id} item={item}/>
                )} 
            )}
            </CardsBox>
      </div>
  )
}
