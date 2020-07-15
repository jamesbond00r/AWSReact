import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
   <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Lucky</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Tips</Nav.Link>
  </Nav.Item>
</Nav>
        

  <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
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
