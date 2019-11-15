import React from "react";
import { Link, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import styled from 'styled-components';

const CrazyHeader = styled.header`
  background: black;
  margin: 0;
  padding: 0.5rem;
`;

const CrazyH1 = styled.h1`
  font-size: 3.5rem;
  padding-top: 1rem;
  font-family: 'Finger Paint', cursive;
  color: #0CB0C1;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  text-shadow:
        -3px -3px 0 #75B866,
        3px -3px 0 #75B866,
        -3px 3px 0 #75B866,
        3px 3px 0 #75B866;
`;

const LinkContainer = styled.div`
  
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  background: #46942D;
  height: 2rem;
  border-radius: 3px;
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-family: 'Gaegu', cursive;
    &:hover { 
      font-style: italic;
    }
  }

`;

export default function Header() {
  return (
    <div>
    <CrazyHeader className="ui centered">
      <CrazyH1 className="ui center">Rick &amp; Morty Fan Page</CrazyH1>
      <LinkContainer>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
        <Link to='/locations'>Locations</Link>
      </LinkContainer> 
    </CrazyHeader>
    <Route exact path='/' component={WelcomePage} />
    <Route path='/characters' component={CharacterList} />
    <Route path='/locations' component={LocationsList} />
    </div>
  );
}
