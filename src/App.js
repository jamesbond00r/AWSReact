import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './nav.js';
import Jumbo from './Jumbo';
import CardBody from './Card';
import NavBarLower from './NavBarLower';
import  Body from './body';


function App() {
  return (
    <div className="App">
  
   <Jumbo> </Jumbo>
   
   <CardBody></CardBody>
   <Body></Body>
  <NavBarLower></NavBarLower>
       
    </div>
  );
}

export default App;
