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
   Find online contest, sweepstakes, tips and tricks all in one place and dont forget to sign up for our lucky emails and get contest and sweepstakes we find right to your email!
  </p>
  <p>
    <a href="./contest"> <Button size="lg" variant="primary">Enter Contest and sweepstakes</Button></a>

     <a href="./lucky"> <Button id='button2' size="lg" variant="success">Sign up for lucky emails</Button></a>
  </p>
  
</Jumbotron>
        
)
        }