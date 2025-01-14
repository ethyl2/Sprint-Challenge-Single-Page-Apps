import React from "react";
import styled from 'styled-components';

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


export default function SearchForm( {handleChange, searchTerm }) {
 
  return (
    <section className="search-form">
     <StyledForm>
        <label htmlFor="name">Search: </label>
        <input id='name' type='text' name='name' placeholder=' 🔎 search' onChange={handleChange} value={searchTerm} />
      </StyledForm>
    </section>
  );
}
