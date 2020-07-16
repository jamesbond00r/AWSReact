import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './nav.js';
import Jumbo from './Jumbo';
import CardBody from './Card'

function App() {
  return (
    <div className="App">
   <Bar></Bar>
   <Jumbo> </Jumbo>
   <CardBody></CardBody>
  
        
    </div>
  );
}

export default App;
