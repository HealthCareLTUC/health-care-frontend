import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


function SignupPatient({ handleShow, handleClose, show }) {
  const [similar, setSimilar] = useState(false);
  const [username, setUsername] = useState(``)
  const [password, setPassword] = useState(``)
  const [history, setHistory] = useState(``)
  const [age, setAge] = useState(30)
  const alreadyUsed=useRef(true)


  useEffect(() => {
    const password1 = document.querySelector("#inputPassword7")?.value;
    const password2 = document.querySelector("#inputPassword8")?.value;
    setSimilar(password1 === password2);
  }, []);

  const handlePasswordChange = () => {
    const password1 = document.querySelector("#inputPassword7")?.value;
    const password2 = document.querySelector("#inputPassword8")?.value;
    setPassword(document.querySelector("#inputPassword7")?.value)
    setSimilar(password1 === password2);
  };
 

  async function postPatientData(url, username, password, history, age, similar) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        n: username,
        pa: password,
        h: history,
        ap: " ",
        a: age
      })
    };
    if (similar) {
      const response = await fetch(`${url}/insertPatenit`, requestOptions);
      const data = await response.json();
      console.log(data);
      console.log(password);
      console.log(username);

    }

  }


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Patient's Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control id="username" type="text" placeholder="UserName" onChange={() => { setUsername(document.querySelector("#username")?.value);}} />

          <Form.Label htmlFor="history">Disease you had or are still having</Form.Label>
          <Form.Control id="history" type="text" placeholder="Disease History" onChange={() => { setHistory(document.querySelector("#history")?.value) }} />
          <Form.Label htmlFor="age">Age</Form.Label>
          <Form.Control id="age" type="number" placeholder="age" onChange={() => { setAge(document.querySelector("#age")?.value) }} />
          <Form.Label htmlFor="inputPassword7">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword7"
            aria-describedby="passwordHelpBlock"
            onChange={handlePasswordChange}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
          </Form.Text>
          <Form.Label htmlFor="inputPassword8">Repeat Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword8"
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
          {/* <Link to="/patientPage"> */}
          <Button variant="primary" onClick={async () => await postPatientData("https://healthcare-back.onrender.com", username, password, history, age, similar)}>
            Signup
          </Button>
          {/* </Link> */}
        </Modal.Footer> 
      </Modal>
    </>
  );
}

export default SignupPatient;
