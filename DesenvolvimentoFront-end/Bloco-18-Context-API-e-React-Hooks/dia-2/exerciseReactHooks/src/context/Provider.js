// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider(props) {

  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  })

  const [signal, setSignal] = useState({
    color: 'red',
  });

  function moveCar(car, side) {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  function changeSignal(signalColor) {
    setSignal({
      color: signalColor,
    });
  };

  const context = {
    cars: {...cars},
    signal: {...signal},
    moveCar,
    changeSignal,
  };

  const { children } = props;

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
