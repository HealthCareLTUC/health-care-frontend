import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assests/iconDoctors.png'
import { Image } from 'react-bootstrap';
import Pharmacy from '../Pharmacy/Pharmacy';
import { Link } from 'react-router-dom';

import './NavBar.css'


function NavBAr() {
  // console.log('Patient Data in NavBar:', patientData);

  function getdata() {
    try {
      let retriveData = localStorage.getItem('appointments');
      let obArr = JSON.parse(retriveData);
      console.log('Data retrieved from local storage:', obArr);
      return obArr || [];
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
      return [];
    }
  }
let username=getdata()




  
  return (
    <Navbar expand="lg" style={{backgroundColor:"#E3F4F4"}} >
      <Container fluid>

      <Image src={Logo}    className='logo' /> 

        <Navbar.Brand href="/" style={{fontFamily: 'Courgette, cursive',fontSize:'35px',color:'#1f43e0',}}>HealthCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/PatientPage" className="nav-link" style={{fontFamily: 'Courgette, cursive',fontSize:'20px',color:'#1f43e0',marginLeft:"30px"}}>Home</Nav.Link>
            <Nav.Link href="/patientprofile" className="nav-link" style={{fontFamily: 'Courgette, cursive',fontSize:'20px',color:'#1f43e0'}}>PatientProfile</Nav.Link>
            <Nav.Link href="/Pharmacy" className="nav-link" style={{fontFamily: 'Courgette, cursive',fontSize:'20px',color:'#1f43e0'}}>Pharmacy</Nav.Link>
            

           
<div  className='welcome' >
{/* <p style={{ fontFamily: "'Courgette', 'cursive'", fontSize: '20px', color: '#1f43e0', marginLeft:'500px' }} > welcome { username[0].patient_name} </p> */}


            <Form className="d-flex">
           <Link to="/">
            <Button  className='button' style={{backgroundColor:'#1f43e0 ',fontFamily:'Courgette, cursive',marginLeft:'620px',width:'100px'}}>log out</Button>
            </Link>
          </Form>
          </div>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBAr;