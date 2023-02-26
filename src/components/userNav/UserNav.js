import React, { createContext, useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navLogo from "../assets/logo.png";
import darkmodelogo from "../assets/dark-mode.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import "../userNav/UserNav.css"
import { Link } from "react-router-dom";
import { CartContextProvider, SharedData } from "../../cartContext/CartContext";
const UserNav = (props) => {


  const enableMode = () => {
    if(document.body.style.backgroundColor === "white"){
      document.body.style.backgroundColor = "black";
      document.body.style.color = "gray";
    }else{
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="">
            <img style={{ height: "50px" }} src={navLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white"}}/>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <Nav.Link to="/home"><Link className="nav-links" to="/home">Home</Link></Nav.Link>
              <Nav.Link to="/shopping"><Link className="nav-links" to="/shopping">Shopping</Link></Nav.Link>
              <Nav.Link to="/userProfile"><Link className="nav-links" to="/userProfile">Account</Link></Nav.Link>
            </Nav>
            <MdDarkMode className="mode-icon mx-4" onClick={enableMode}/>
           
              
          <a href="/cart"><AiOutlineShoppingCart className="cart-icon"/></a>
         
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default UserNav;
