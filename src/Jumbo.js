import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { faGem} from "@fortawesome/free-solid-svg-icons";


export default function Jumbo () {

	return(

<Jumbotron id="background">
  
  <h1>LUCKY YOU! </h1>
  <h3>   We hunt down contest and sweepstakes from around the interent for you to enter!  </h3>
  <p >
   Find online contest, sweepstakes, tips and tricks all in one place and easy to use. Dont forget to sign up for  lucky emails and get short simple emails containing contest and sweepstakes we find fo you!

  </p>
  <p>
    <a href="./contest"> <Button id='button2' size="lg" variant="primary">Enter Contest and sweepstakes  <FontAwesomeIcon icon={faGem}/></Button></a>

     <a href="./lucky"> <Button id='button2' size="lg" variant="warning">Sign up for lucky emails  <FontAwesomeIcon icon={faPaperPlane}/></Button></a>
  </p>
  
</Jumbotron>
        
)
        }