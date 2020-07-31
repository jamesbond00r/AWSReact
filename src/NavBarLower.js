import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";
import {faRedditAlien} from "@fortawesome/free-brands-svg-icons";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function Navbarlower () {

	return(
 <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
  <Container>
    <Navbar.Brand href="https://www.luckystreak.io/">LuckyStreak.io</Navbar.Brand>
    <a href = "mailto: rob@luckystreak.awsapps.com" >Email Us  <FontAwesomeIcon icon={faEnvelopeOpenText}/></a>
 	<a href ="https://www.reddit.com/" >Fake Internet Points  <FontAwesomeIcon icon={faRedditAlien}/></a>
 	<a href = "https://twitter.com/" > Tweet about us	<FontAwesomeIcon icon={faTwitter}/></a>
  </Container>
</Navbar>

)
        }