import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Navbarlower () {

	return(
 <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
  <Container>
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
  </Container>
</Navbar>

)
        }