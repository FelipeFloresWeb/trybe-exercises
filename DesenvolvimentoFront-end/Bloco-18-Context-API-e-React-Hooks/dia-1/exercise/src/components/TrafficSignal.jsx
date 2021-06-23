import React from 'react';

import redSignal from '../images/redSignal.jpeg';
import greenSignal from '../images/greenSignal.jpeg';
import yellowSignal from '../images/yellowSignal.jpeg';
import MyContext from '../context/Mycontext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

function TrafficSignal() {
  return (
    <MyContext.Consumer>
      {
        value => (
          <div>
      <div className="button-container">
        <button onClick={ value.changeSignal } type="button">Red</button>
        <button onClick={ value.changeSignal } type="button">Yellow</button>
        <button onClick={ value.changeSignal } type="button">Green</button>
      </div>
      <img
        className="signal"
        src={renderSignal(value.state.signalColor)}
        alt={`${value.state.signalColor} car`}
      />
    </div>
        )
      }
    </MyContext.Consumer>
  );
}

export default TrafficSignal;