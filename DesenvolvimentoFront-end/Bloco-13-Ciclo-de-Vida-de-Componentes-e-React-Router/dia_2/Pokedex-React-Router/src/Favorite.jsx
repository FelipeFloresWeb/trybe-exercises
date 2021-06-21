import React from 'react';
import data from './data';
import { Link } from 'react-router-dom';

class Favorite extends React.Component {
  render() {

    function getPokemon() {
      return data.filter((pokemon) => pokemon.favorite === true);
    }

    const getfavoritePokemons = getPokemon();

    return (
      <div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/favorite">Favorite Pokemons</Link>
      </nav>
      { getfavoritePokemons.map((pokemon) => 
      <>
        <div key={ pokemon.name } className="pokemon">
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>
            Average weight: {`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={pokemon.image} alt={`${pokemon.name} sprite`} />
      </div>
        <Link to={`pokemons/${pokemon.id}`}>More details</Link>
        </>
        ) }
      </div>     
    );
  }
}

export default Favorite;
