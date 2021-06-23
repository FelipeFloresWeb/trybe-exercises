import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import TrafficSignal from './components/TrafficSignal';
import MyProvider from './context/MyProvider';

class App extends Component {
  render() {
    return (
      <MyProvider>
      <TrafficSignal />
      <Cars />
      </MyProvider>
    );
  }
}

export default App;
