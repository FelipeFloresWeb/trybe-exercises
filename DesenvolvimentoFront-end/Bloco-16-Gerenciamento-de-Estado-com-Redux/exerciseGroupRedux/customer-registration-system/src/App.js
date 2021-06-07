import React from 'react';
import './App.css';
import Pokemons from './components/Pokemons';

function App() {
  return (
    <div className="App">
      <h1>
        Pokemons
        <span className="purple-font">Tracker</span>
      </h1>
      <Pokemons />
    </div>
  );
}

export default App;