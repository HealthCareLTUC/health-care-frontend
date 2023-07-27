import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
// import PatientPage from '../../PatientPage'



import { Route, Routes } from 'react-router';

function LoginPatient({ handleShow, handleClose, show ,callback}) {
  const savePatientData=React.createContext()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [path,setPath]=useState("/")
  async function getPatientData(url,username,password){
    try {
    const response = (await fetch(`${url}/patientName/${username}`));
    const data=await response.json()
    if((data[0]["name"]==username)&&(data[0]["password"]==password)){
      setPath("/patientPage")
      window.location.href = "/patientPage";
      console.log(`logged in successfully`);
      return data
    }else{
      window.location.href = "/";
      console.log("failed to login");
    }} catch (error) {
      window.location.href = "/";
      alert("Username or password is wrong "+error)
    }
    
}
  return (
    <>
   
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Patient's Login</Modal.Title>
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
          <Link to={path}>
          <Button variant="primary" onClick={async()=>{await callback(await getPatientData("https://healthcare-back.onrender.com", username, password))}}>
            Login
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginPatient;
