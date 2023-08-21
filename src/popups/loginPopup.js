import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
function LoginPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="loginBtn">
        Non SSO Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Non SSO Login</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display: "flex", justifyContent: 'space-between'}}>
        <Button className="loginBtn"> <Link to="/nonssologin" style={{color: "white", textDecoration: "none"}}  >Existing User</Link></Button>
        <Button className="loginBtn"> <Link to="/nonssologin" style={{color: "white", textDecoration: "none"}} > Create Account </Link> </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginPopup;