import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './nav.js';
import Jumbo from './Jumbo';
import CardBody from './Card';
import NavBarLower from './NavBarLower';


function App() {
  return (
    <div className="App">
   <Bar></Bar>
   <Jumbo> </Jumbo>
   <CardBody></CardBody>
  <NavBarLower></NavBarLower>
       
    </div>
  );
}

export default App;
