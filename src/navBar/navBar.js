import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import BMLogo from '../assets/bookmeetLogo_Web.png';
const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark"> 
        <Container>
          <Navbar.Brand href="#home"><img src={BMLogo} alt=" BookMeet" style={{width: '80%'}}></img></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
