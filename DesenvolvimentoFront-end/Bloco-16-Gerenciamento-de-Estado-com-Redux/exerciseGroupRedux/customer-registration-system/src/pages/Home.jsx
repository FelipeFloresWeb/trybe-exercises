import React, { Component, Link } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <nav>
        <Link to="login">Login</Link>
        </nav>
        <h2>Home</h2>
      </div>
    );
  }
}

export default Home;