import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import About from './About';
import Favorite from './Favorite';
import NoMatch from './NoMatch';

function App() {
  return (
    <Router>
    <div className="App">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyiHtSZfD_pLtGNGhk1PlLUiP6N5yCz1RYsg&usqp=CAU" alt="Pokedex"/>
      <Switch>
      <Route path="/" exact render={ (props) => <Pokedex { ...props } pokemons={ pokemons } />}/>
      <Route path="/pokemons/:pokemonid" render={ (props) => <PokemonDetails { ...props } pokemons={ pokemons } />}/>
      <Route path="/pokemons" component={ PokemonDetails }></Route>
      <Route path="/about" component={ About } />
      <Route path="/favorite" component={ Favorite } />
      <Route component={ NoMatch } />
      </Switch>
    </div>
    </Router>
  );
}

export default App;