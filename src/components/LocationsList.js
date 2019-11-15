import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';
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
    const [searchTermLocation, setSearchTermLocation] = useState('');
    const [searchResultsLocation, setSearchResultsLocation] = useState([]);

    useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        console.log(response.data.results);
        const winners = response.data.results.filter(place => place.name.toLowerCase().includes(searchTermLocation.toLowerCase()));
        setSearchResultsLocation(winners);
      })
  }, [searchTermLocation]);

  const handleChange = event => {
    setSearchTermLocation(event.target.value);
  }

  return (
      <div>
            <StyledForm>
            <label htmlFor="name">Search: </label>
                <input id='name' type='text' name='name' placeholder=' 🔎 search' onChange={handleChange} value={searchTermLocation} />
            </StyledForm>
            <CardsBox>
            {searchResultsLocation.map(place => {
            return (
                <LocationCard  key={place.id} location={place}/>
                )} 
            )}
            </CardsBox>
      </div>
  )
}
