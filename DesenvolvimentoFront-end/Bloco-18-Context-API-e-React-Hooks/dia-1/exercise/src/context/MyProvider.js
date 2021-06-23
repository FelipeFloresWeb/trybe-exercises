import React, { Component } from 'react';
import MyContext from '../context/Mycontext';

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      blueCar: false,
      redCar: false,
      yellowCar: false,
      signalColor: 'red',
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar = (string, bool) => {
    this.setState(({ [string]: bool }))
  }

  changeSignal = (event) => {
    const { innerHTML } = event.target;
    this.setState(({ signalColor: innerHTML.toLowerCase() }))
  }

  render() {
    const { moveCar, state, changeSignal } = this;
    const handleCars = {
      moveCar,
      state,
      changeSignal,
    }
    const { children } = this.props
    return (
      <main>
      <MyContext.Provider value={handleCars}>
      {children}
      </MyContext.Provider>
      </main>
    );
  }
}

export default MyProvider;
