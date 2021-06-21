import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Pokedex from './Pokedex';

class Content extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Pokedex} />
      </div>
    );
  }
}

export default Content;