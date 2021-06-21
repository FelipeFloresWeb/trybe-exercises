import React from 'react';
import MyContext from './dia-1/createContext';

function MyOtherComponent() {
    return (
      <div>
        <MyContext.Consumer>
          {
            value => (
              <div>
                <p>{`Eu tenho ${value.money} para gastar`}</p>
                <button onClick={value.spendMoney}>Gastar 100</button>
              </div>
            )
          }
        </MyContext.Consumer>
      </div>
    );
}

export default MyOtherComponent;