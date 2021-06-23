// src/App.js

import React from 'react';
import './App.css';
import Cars from './Cars';
import Provider from './context/Provider';
import TrafficSignal from './TrafficSignal';

function App() {
  return (
    <Provider>
      <div className="container">
        <Cars />
        <TrafficSignal />
      </div>
    </Provider>
  );
}

export default App;
