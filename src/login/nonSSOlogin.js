import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loginImg from "../assets/loginImg.png";
import NavBar from "../navBar/navBar";
import './/NonSSOlogin.css'


function NonSSOLogin() {
  return (
    <>
    <NavBar />
    <div className="container">
      <div className="formPart">
        <h3 style={{marginBottom: '1rem'}}>Enter Login Info</h3>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button variant="primary" type="submit" style={{marginTop: '1rem', width: '100%'}}>
          Login
        </Button>
      </div>
      <div className="displayImg">
        <img src={loginImg} style={{width: '80%'}}/>
      </div>
    </div>
    </>
  );
}

export default NonSSOLogin;
