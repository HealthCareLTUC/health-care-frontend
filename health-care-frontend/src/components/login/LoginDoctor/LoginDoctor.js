import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function LoginDoctor({ handleShow, handleClose, show, callback }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [path, setPath] = useState("/")
  async function getDoctorData(url, username, password) {
    try {
      const response = (await fetch(`${url}/DoctorName/${username}`));
      const data = await response.json()
      if ((data[0]["name"] == username) && (data[0]["password"] == password)) {
        console.log(`logged in successfully`);
        window.location.href = "/";
        return data
      } else {
        console.log("failed to login");
        window.location.href = "/";

      }
    } catch (error) {
      alert("Username is wrong " + error)
      window.location.href = "/"; 
      console.log("hello")

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
          <Form.Label htmlFor="inputPassword3">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword3"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setPassword(e.target?.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={async () => { await callback(await getDoctorData("https://healthcare-back.onrender.com", username, password)) }}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginDoctor;
