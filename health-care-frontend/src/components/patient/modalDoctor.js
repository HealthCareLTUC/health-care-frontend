import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalDoctor({ handleShow, handleClose, show, doctor, CommentHandler, patientData }) {
  const [Comment, setComment] = useState('');
  const commentInput = useRef('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const userComment = commentInput.current.value;
    setComment(userComment);
    const comentDoc = { ...doctor, userComment };
    CommentHandler(comentDoc, doctor.id);
  }

  const handleSaveChanges = async () => {
    try {
      const doctorResponse = await fetch('https://healthcare-back.onrender.com/insertDoctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          n: doctor.name,
          pa: "1234",
          a: doctor.location,
          s: doctor.Specialty,
          p: doctor.phone,
        }),
      });

      if (doctorResponse.ok) {
        console.log('Doctor inserted successfully');
       
        const doctorData = await doctorResponse.json();
        console.log(doctorData.id);
        let doctorNewId=doctorData.id;
        console.log("doctorNewId",doctorNewId);
        console.log("patientData",patientData[0]);
        await fetch('https://healthcare-back.onrender.com/insertappointment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            patient_id: patientData.id,
            patient_name: patientData.patient_name,
            Doctor_id: doctorNewId,
            doctor_name: doctor.name,
            reservation_date: reservationDate,
            reservation_time: reservationTime,
            report: '',
          }),
        });
        console.log('Appointment inserted successfully');
      } else {
        console.error('Error inserting doctor:', doctorResponse.statusText);
      }
    } catch (error) {
      console.error('Error inserting data:', error);
    }
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{doctor.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{doctor.appointment}</Modal.Body>

        

        <Form.Group controlId="reservationDate">
          <Form.Label>Reservation Date</Form.Label>
          <Form.Control
            type="date"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="reservationTime">
          <Form.Label>Reservation Time</Form.Label>
          <Form.Control
            type="time"
            value={reservationTime}
            onChange={(e) => setReservationTime(e.target.value)}
          />
        </Form.Group>

    
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDoctor;