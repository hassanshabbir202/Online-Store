import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import adminlogo from "../assets/adminlogo.png"
import "./NavM.css"
const NavM = () => {
  return (
    <div>
         <Navbar bg="light" className='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className='admin-logo'/> <span id='admin-name'>Ahmed</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admin" className='navlink'>Home</Nav.Link>
            <Nav.Link href="/addproduct" className='navlink'>Add Item</Nav.Link>
            <Nav.Link href="/profile" className='navlink'>Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a href="/cart">cart</a>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavM
