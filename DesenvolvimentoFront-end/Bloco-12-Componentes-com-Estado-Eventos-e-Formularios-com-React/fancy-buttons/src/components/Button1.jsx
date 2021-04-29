import React, { Component } from 'react';

class Button1 extends Component {
  constructor() {
    super()
    this.createDiv = this.createDiv.bind(this);
  }

  createDiv() {
    return console.log('Parabéns!!! Voce conseguiu criar seu primeiro constructor');
  }

  render() {
    return (
      <div>
        <button onClick={this.createDiv}>Clique Aqui!</button>
      </div>
    );
  }
}

export default Button1;