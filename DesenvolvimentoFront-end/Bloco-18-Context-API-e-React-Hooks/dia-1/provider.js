import React, { Component } from 'react';
import MyOtherComponent from '../MyOtherComponent';
import MyContext from './MyContext';

class MyComponent extends Component {
  constructor() {
    super();
    this.setState = {
      money: 1000000,
    }
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney() {
    const { money } = this.state;
    this.setState(({ money: money - 100 }))
  }

  render() {
    const { money } = this.state;
    const contextValue = {
      money: money,
      spendMoney: this.handleSpendMoney,
    }
  
    return (
      <MyContext.Provider value={contextValue}>
        <MyOtherComponent />
      </MyContext.Provider>
    )
  }
}

export default MyComponent;