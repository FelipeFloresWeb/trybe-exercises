// src/Cars.jsx
import PropTypes from 'prop-types';
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './context/Mycontext';

const checkSignal = (collor) => {
 switch (collor) {
   case 'green':    
     return 'green-sinal';
     case 'yellow':    
     return 'yellow-sinal';
   default:
     return 'car-left';
 }
}

function Cars(value) {
  return (
    <MyContext.Consumer>
      {
        value => {
          const { state, moveCar, changeSignal } = value;
        return (
          <div>
            {console.log(state)}
      <div>
        <img
          className={checkSignal(state.signalColor)}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => moveCar('redCar', state.redCar)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={checkSignal(state.signalColor)}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => moveCar('blueCar', !state.blueCar)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={checkSignal(state.signalColor)}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => moveCar('yellowCar', !state.yellowCar)}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
        )}
      }
    </MyContext.Consumer> 
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func,
  blueCar: PropTypes.bool,
  redCar: PropTypes.bool,
  yellowCar: PropTypes.bool,
}.isRequired;

export default Cars;
