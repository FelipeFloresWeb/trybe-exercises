import React, { Component } from 'react';

class Button2 extends Component {
  constructor() {
    super()
    this.createDiv = this.createDiv.bind(this);
  }

  createDiv() {
    return console.log('Parabéns!!! Voce conseguiu criar seu segundo constructor');
  }

  render() {
    return (
      <div>
        <button onClick={this.createDiv}>Clique Aqui!</button>
      </div>
    );
  }
}

export default Button2;