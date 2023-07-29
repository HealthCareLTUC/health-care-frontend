import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ModalDoctor from './modalDoctor';

const CardDoctors = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className='sizeCard'>

      <Card className='card' style={{ width: '18rem', backgroundColor: '#CEE6F3' }}>
        <Card.Body>
          <Card.Text className='name'>{props.doctor.name}</Card.Text>
          <Card.Text>{props.doctor.location}</Card.Text>
          <Card.Text>{props.doctor.Specialty}</Card.Text>
          <Card.Text>{props.doctor.phone}</Card.Text>
          <Button className='cardb' style={{ backgroundColor: 'blue' }} onClick={handleShow} variant="primary">
          Appointment
          </Button>
        </Card.Body>
      </Card>
      <ModalDoctor handleShow={handleShow} handleClose={handleClose} show={show} patientData={props.patientData} CommentHandler={props.CommentHandler} doctor={props.doctor} />

    </div>
  );
};

export default CardDoctors;
