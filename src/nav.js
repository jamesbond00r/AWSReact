
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './App.css';


export default function Bar () {

	return(

<div className='navText'>
<Nav className="justify-content-end" variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  eventKey="/lucky.js">Lucky</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Tips</Nav.Link>
  </Nav.Item>
</Nav>
        </div>
)
        }