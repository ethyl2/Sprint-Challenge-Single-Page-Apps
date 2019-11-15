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
    const [searchTermLocation, setSearchTermLocation] = useState('');
    const [searchResultsLocation, setSearchResultsLocation] = useState([]);
    const [page, setPage] = useState(`page=1`);

    function getPage(direction) {
      const numberPattern = /\d+/g;
      let num = page.match(numberPattern);
      //console.log(num);
      (direction === "next")? num++ : num--;
    
      if (num > 4) {
        num = 1;
      }
      if (num < 1) {
        num = 4;
    }
      //console.log(num);
      setPage(`page=${num}`);  
    }

    useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/?${page}`)
      .then(response => {
        //console.log(response.data.results);
        const winners = response.data.results.filter(place => place.name.toLowerCase().includes(searchTermLocation.toLowerCase()));
        setSearchResultsLocation(winners);
      })
  }, [searchTermLocation, page]);

  const handleChange = event => {
    setSearchTermLocation(event.target.value);
  }

  return (
      <div>
            <StyledForm>
            <label htmlFor="name">Search: </label>
                <input id='name' type='text' name='name' placeholder=' 🔎 search' onChange={handleChange} value={searchTermLocation} />
            </StyledForm>
            <ButtonContainer>
              <button onClick={() => getPage("previous")}>⬅️ Previous Page</button>
              <button onClick={() => getPage("next")}>Next Page ➡️</button>
            </ButtonContainer>
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
