import './LoginNav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assests/iconDoctors.png'


function LoginNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img className='img' src={logo} alt='healthcare'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link    style={{ color: '#1f43e0', fontSize: '35px' }} href="" > healthCare </Nav.Link>

            {/* <h1> welcome to <span>healthCare</span> website </h1> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LoginNav;