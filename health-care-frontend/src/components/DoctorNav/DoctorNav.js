import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assests/iconDoctors.png'
import { Image } from 'react-bootstrap';
import Pharmacy from '../Pharmacy/Pharmacy';
import { Link } from 'react-router-dom';

import './DoctorNav.css'


function DoctorNavBAr() {
  // console.log('Patient Data in NavBar:', patientData);

  
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
            
            
            

            <Form className="d-flex">
           <Link to="/">
            <Button  style={{backgroundColor:'#1f43e0 ',fontFamily:'Courgette, cursive',marginLeft:'1000px'}}>log out</Button>
            </Link>
          </Form>
            
          </Nav>
          {/* variant="primary"
          */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DoctorNavBAr;