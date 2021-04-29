import React, { Component } from 'react';

class Button3 extends Component {
  constructor() {
    super()
    this.createDiv = this.createDiv.bind(this);
  }

  createDiv() {
    return console.log('Parabéns!!! Voce conseguiu criar seu terceiro constructor');
  }

  render() {
    return (
      <div>
        <button onClick={this.createDiv}>Clique Aqui!</button>
      </div>
    );
  }
}

export default Button3;