import './App.css';
import { React, BrowserRouter } from 'react';
import { Router } from 'react-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Router exact path='/' component={ Home } />
      <Router path='/login' component={ Login } />
     </BrowserRouter>
    </div>
  );
}

export default App;

