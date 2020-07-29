import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import './App.css';
import beach from "./pics/elizeu-dias-RN6ts8IZ4_0-unsplash.jpg";
export default function CardBody () {

	return(
<div  className="bg">
<h4 className="text">Find contest with cool prizes!</h4>
<h4 className="text2">Enter and play!</h4>
<h4 className="text3">Keep coming back for more!</h4>
<h4 className="text4">Get new contest to your indbox!</h4>
<img  className="beach" src={beach} />

</div>
)
        }