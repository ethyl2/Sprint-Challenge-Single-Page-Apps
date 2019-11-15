import React from "react";
import { Link, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';

export default function Header() {
  return (
    <div>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to='/'>Home</Link>
      <Link to='/characters'>Characters</Link>

      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </header>
    </div>
  );
}
