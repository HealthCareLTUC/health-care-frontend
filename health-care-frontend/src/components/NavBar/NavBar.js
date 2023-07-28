import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assests/iconDoctors.png'
import { Image } from 'react-bootstrap';
import './NavBar.css'


function NavBAr() {
  return (
    <Navbar expand="lg" style={{backgroundColor:"#E3F4F4"}}>
      <Container fluid>

      <Image src={Logo} sm   className='logo' /> 

        <Navbar.Brand href="/" style={{fontFamily: 'Courgette, cursive',fontSize:'30px',color:'#1f43e0'}}>HealthCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/patientProfile" style={{fontFamily: 'Courgette, cursive',fontSize:'20px',color:'#1f43e0'}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{fontFamily: 'Courgette, cursive',fontSize:'20px',color:'#1f43e0'}}>PatientProfile</Nav.Link>
            <Nav.Link href="#action2" style={{fontFamily: 'Courgette, cursive',fontSize:'20px',color:'#1f43e0'}}>Pharmacy</Nav.Link>
            

            <Form className="d-flex">
           
            <Button  style={{backgroundColor:'#1f43e0 ',fontFamily:'Courgette, cursive',marginLeft:'700px'}}>log out</Button>
          </Form>
            
          </Nav>
          {/* variant="primary"
          */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBAr;