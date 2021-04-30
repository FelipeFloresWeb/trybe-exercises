import React from 'react';
import './PokedexCSS.css';
import Pokemon from './Pokemon';
import Button from './Button';
import ButtonType from './ButtonType';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      pokemons: false,
    };

    this.setIndex = this.setIndex.bind(this);
    this.setPokemons = this.setPokemons.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
  }

  setIndex(value) {
    this.setState((ant, _props) => ({
      index: value,
    }));
  }

  setPokemons(value) {
    this.setState((ant, _props) => ({
      pokemons: value,
    }));
  }

  filterPokemons() {
    return this.props.pokemons.filter(
      ({ type }) => type === this.state.pokemons || !this.state.pokemons,
    );
  }

  render() {
    const values = {
      index: this.state.index,
      statePokemon: this.state.pokemons,
      pokemons: this.filterPokemons(),
      setIndex: this.setIndex,
      setPokemons: this.setPokemons,
    };

    const filterTypes = [...this.props.pokemons].map(({ type }) => type);
    const listTypes = filterTypes.filter((elem, idx, arr) => arr.indexOf(elem) === idx);
    const btnsType = listTypes.map((types, index) => <ButtonType key={index} values={values} type={types} />);

    return (
      <div className="pokedex">
        <Pokemon pokemon={values.pokemons[values.index]} />

        <div className="row-btn-types">
          <ButtonType values={values} type={false} />
          {btnsType}
        </div>

        <div className="row-btn-next">
          <Button key='next'values={values} />
        </div>
      </div>
    );
  }
}

export default Pokedex;