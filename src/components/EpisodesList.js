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
  width: 50%;
  margin: 1.5rem auto;
  font-family: 'Gaegu', cursive;
  font-size: 2rem;
  input {
    height: 2rem;
  }
`;

export default function LocationsList() {
    const [searchTermEpisode, setSearchTermEpisode] = useState('');
    const [searchResultsEpisode, setSearchResultsEpisode] = useState([]);

    useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        console.log(response.data.results);
        const winners = response.data.results.filter(item => item.name.toLowerCase().includes(searchTermEpisode.toLowerCase()));
        setSearchResultsEpisode(winners);
      })
  }, [searchTermEpisode]);

  const handleChange = event => {
    setSearchTermEpisode(event.target.value);
  }

  return (
      <div>
            <StyledForm>
            <label htmlFor="name">Search: </label>
                <input id='name' type='text' name='name' placeholder=' search' onChange={handleChange} value={searchTermEpisode} />
            </StyledForm>
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
