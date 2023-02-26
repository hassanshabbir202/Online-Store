import React from "react";
import logo from "../assets/logo.png";
import "../welcomeScreen/WelcomeScreen.css";
import Button from "react-bootstrap/Button";
import TextCont from "../textCont/TextCont";

const WelcomeScreen = (props) => {
  return (
    <div>
      <div className="logoContainer">
        <img className="logo-image" src={logo} alt="logo" />
      </div>
      <TextCont />
      <div className="btnCont my-4">
        <a href="/login">
          <Button className="get-started">
            Get Started
          </Button>
        </a>
      </div>
    </div>
  );
};

export default WelcomeScreen;
