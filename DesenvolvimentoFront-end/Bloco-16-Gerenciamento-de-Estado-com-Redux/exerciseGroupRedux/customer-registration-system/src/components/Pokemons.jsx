import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGetPokemonsThunk } from '../actions';

class Pokemons extends Component {
  componentDidMount() {
    const { getGetPokemons } = this.props;
      getGetPokemons();
  }

  render() {
    const results  = this.props;
    console.log(results);
    if (results.length < 1) return <h2>Loading...</h2>;
    return (
      <main>
        <div className="map">
        { results.map((pokemon) => (
          <div key={pokemon.name}>
            { pokemon.name }
          </div>
        )) }
        </div>
      </main>
    );
  }
}

const mapStateToProps = (results) => ({
  pokemons: results,
});

const mapDispatchToProps = (dispatch) => ({
  getGetPokemons: () => dispatch(getGetPokemonsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
