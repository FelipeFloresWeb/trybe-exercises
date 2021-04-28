import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

function Pokedex(props) {
  return (
      props.pok.map((pokemon) =>
      <Pokemon key={pokemon.name} poke={pokemon} />
      )
  )
}

Pokedex.propTypes = {
  pok: PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
  })).isRequired,
};

export default Pokedex;