import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

function LoginDoctor({ handleShow, handleClose, show }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function getDoctorData(url, username, password) {
    try {
      const response = await fetch(`${url}/DoctorName/${username}`);
      const data = await response.json();

      if (data.length > 0 && data[0].doctor_name == username && data[0].password == password) {
        console.log('Logged in successfully:', data[0]);
        return data[0];
      } else {
        console.log('Failed to login');
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching patient data:', error);
      throw new Error('Failed to fetch patient data');
    }
  }

  async function handleLogin() {
    try {
      const DoctorData = await  getDoctorData('https://healthcare-back.onrender.com',username,password);

    
      console.log('Navigating to patient page with data:', DoctorData);
      navigate('/DoctorPage', { state: { DoctorData } });
      
    } catch (error) {
      console.error('Error during login:', error);
  
      alert('Invalid username or password. Please try again.');
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor's Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            placeholder="UserName"
            onChange={(e) => setUsername(e.target?.value)}
          />
          <Form.Label htmlFor="inputPassword4">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword4"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setPassword(e.target?.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  style={{width:'100px'}} variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginDoctor;