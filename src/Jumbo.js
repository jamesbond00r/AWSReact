import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './App.css';

export default function Jumbo () {

	return(

<Jumbotron id="background">
  
  <h1>LUCKY YOU!</h1>
  <h3>We find contest and sweepstakes for you to enter!</h3>
  <p >
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <p>
    <Button size="lg" variant="primary">A Button</Button>

    <Button id='button2' size="lg" variant="success">A Button</Button>
  </p>
  
</Jumbotron>
        
)
        }