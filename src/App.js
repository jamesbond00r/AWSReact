import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './nav.js';


function App() {
  return (
    <div className="App">
   <Bar></Bar>

  <Jumbotron variant="success">
  
  <h1>Hello, world!</h1>
  <p >
    I made a button and a Jumbotron and a nav bar.
  </p>
  <p>
    <Button variant="danger">A Button</Button>
  </p>
  
</Jumbotron>
        
    </div>
  );
}

export default App;
