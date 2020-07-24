import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import './App.css';
import beach from "./pics/marc-babin-9IzrXQakxk0-unsplash.jpg";
export default function CardBody () {

	return(
<div  className="bg">
<h4 className="text">Find contest with cool prizes like vacations, cars and cash!</h4>
<h4 className="text2">Enter and play!</h4>
<h4 className="text3">Keep coming back to enter multi-play games!</h4>
<h4 className="text4">Sign up for emails to get new contest to your indbox!</h4>
<img  className="beach" src={beach} />

</div>
)
        }