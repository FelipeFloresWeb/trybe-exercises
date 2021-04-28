import './App.css';
import Pokedex from './Pokedex';
import pokemonData from './data';


function App() {
  return (
    <>
    <h1>Melhores Pokemons</h1>
    <div className="App">
     <Pokedex pok= {pokemonData}/>
    </div>
    </>
  );
}

export default App;
