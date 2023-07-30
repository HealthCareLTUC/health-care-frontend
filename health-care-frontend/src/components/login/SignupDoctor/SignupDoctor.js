import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
function SignupDoctor({ handleShow, handleClose, show }) {
  const [similar, setSimilar] = useState(false);
  const [username, setUsername] = useState(``)
  const [password, setPassword] = useState(``)
  const [address, setAddress] = useState(``)
  const [specialty, setSpecialty] = useState(``)
  const [phone,setPhone] =useState(123)
  
  const url = process.env.REACT_APP_SERVER_URL;
  
  useEffect(() => {
    const password1 = document.querySelector("#inputPassword5")?.value;
    const password2 = document.querySelector("#inputPassword6")?.value;
    setSimilar(password1 === password2);
  }, []);

  const handlePasswordChange = () => {
    const password1 = document.querySelector("#inputPassword5")?.value;
    const password2 = document.querySelector("#inputPassword6")?.value;
    setPassword(document.querySelector("#inputPassword5")?.value)
    setSimilar(password1 === password2);
  };
  



   async function postDoctorData(url, username, password, address, specialty,phone, similar) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        n: username,
        pa: password,
        a: address,
        s: specialty,
        p:phone
      })
    };
    if (similar) {
      const response = await fetch(`${url}/insertDoctor`, requestOptions);
      const data =await  response.json();
      // console.log(data);
      // console.log(password);
      // console.log(username);
      // console.log(address);
      // console.log(specialty);
      // console.log(phone);

    }

  }


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor's Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control id="username" type="text" placeholder="UserName" onChange={async () => { setUsername(document.querySelector("#username")?.value);}}    />
          <Form.Label htmlFor="address">Address</Form.Label>
          <Form.Control id="address" type="text" placeholder="address" onChange={() => { setAddress(document.querySelector("#address")?.value) }} />
          <Form.Label htmlFor="specialty">Specialty</Form.Label>
          <Form.Control id="specialty" type="text" placeholder="specialty" onChange={() => { setSpecialty(document.querySelector("#specialty")?.value) }} />
          <Form.Label htmlFor="phone">Phone Number</Form.Label>
          <Form.Control id="Phone" type="text" placeholder="Phone Number" onChange={() => { setPhone(document.querySelector("#Phone")?.value) }} />
          <Form.Label htmlFor="inputPassword5"  >Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={handlePasswordChange}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
          </Form.Text>
          <Form.Label htmlFor="inputPassword6">Repeat Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword6"
            onChange={handlePasswordChange}
          />
          <Form.Text id="passwordHelpBlock" muted>
            {similar ? "The passwords match" : "The passwords don't match"}
          </Form.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to={"/"}>
          <Button variant="primary"  style={{width:'100px'}} onClick={async() => {await postDoctorData("https://healthcare-back.onrender.com", username, password, address, specialty,phone, similar);handleClose()}}>
           
           Signup
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default SignupDoctor;
