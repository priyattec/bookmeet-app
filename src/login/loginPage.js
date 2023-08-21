import React from "react";
import NavBar from "../navBar/navBar";
import MainImg from '../assets/mainpgWeb.png';
import ttecLogo from '../assets/ttecLogo_Web.png';
import Button from 'react-bootstrap/Button';
import './LoginPage.css'; // Import your custom CSS file

const LoginPage = () => {
  return (
    <div className="login-page">
      <NavBar />

      
      <div className="logo-container">
        <img src={ttecLogo} alt="ttec" id="tteclogo" />
      </div>
      <div className="content-container">
        <div className="buttons-container">
          <h3>Welcome to</h3>
          <h1>BookMeet App!</h1>
          <Button variant="dark" className="loginBtn">SSO Login</Button>
          <Button variant="dark" className="loginBtn">Non SSO Login</Button>
        </div>
        <div className="image-container">
          <img src={MainImg} alt="2 people sitting" id="mainImg" />
        </div>
      </div>

      
    </div>
  );
};

export default LoginPage;
