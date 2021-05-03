import React, { Component } from 'react';

class inputName extends Component {
  render() {
    const { value, handleForms, errorName } = this.props;
    return (
        <label>Name:
            <input
            type="text"
            value={value}
            name="Name"
            onChange={ handleForms }
            required
          />
          <div>
          <span>{errorName ? errorName : ''}</span>
          </div>
        </label>
    );

  }
}

export default inputName;