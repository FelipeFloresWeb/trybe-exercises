import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image, id, favorite} = this.props.pokemon;
    localStorage.getItem(id, favorite)
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <p>{ favorite ? `Favorite: ${favorite}` : `Favorite: ${favorite}` }</p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        <Link to={`pokemons/${id}`}>More details</Link>
      </div>
    );
  }
}

export default Pokemon;