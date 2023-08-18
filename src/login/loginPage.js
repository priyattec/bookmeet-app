import React from "react";
import NavBar from "../navBar/navBar";
import MainImg from '../assets/mainpgWeb.png';
import ttecLogo from '../assets/ttecLogo_Web.png';
import Button from 'react-bootstrap/Button';


const LoginPage = () => {
  return (
    <div>
      <NavBar />
      <img src={ttecLogo} alt="ttec"></img>
      <img src={MainImg} alt="2 people sitting"></img>
      <Button variant="dark">SSO Login</Button>
      <Button variant="dark">Non SSO Login</Button>
    </div>
  );
};
export default LoginPage;