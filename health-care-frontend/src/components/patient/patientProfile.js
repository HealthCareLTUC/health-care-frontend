import React, { useState, useEffect } from 'react';
import { Table, Button,Modal,Form } from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Footer/footer';
import { useLocation } from 'react-router-dom';
import './patient.css' 



function PatientProfile() {
  const [appointments, setAppointments] = useState([]);
  const location = useLocation();
  const patientData = location.state?.patientData;
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newReport, setNewReport] = useState('');

  

console.log("from patient profile",patientData);
console.log("from patient profile2",patientData);


let newapp=getdata();
console.log("local new data",newapp);

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

  async function fetchAppointments () {
    let id=newapp[0].patient_id;
    console.log("pateint  ID to ",id);
    try {
      const response = await fetch(`https://healthcare-back.onrender.com/getpatientAppointment/${id}`); 
      const recivedData = await response.json();
      setAppointments(recivedData);
    } catch (error) {
      console.error(`Error fetching appointments:, ${error}`);
    }
  };


    async function handleDeleteAppointment(id) {
        console.log("in function",id);
        const url = `https://healthcare-back.onrender.com/delAppointment/${id}`;
    
        let response = await fetch(url, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json"
          },
        });
        if (response.status === 204) {
          alert('deleted successfuly')
        }
        fetchAppointments();
      }
   

      useEffect(() => {
        fetchAppointments();
      
      }, []);

      console.log("appointments finaly",appointments);
   
  console.log("test to see ",newapp[0].appointment_id);





  const handleUpdateAppointment = async () => {
    if (!selectedAppointment) {
      alert('No appointment selected.');
      return;
    }

    const id = selectedAppointment.appointment_id;
    const url = `https://healthcare-back.onrender.com/updateAppointment/${id}`;

    const updatedData = {
      patient_id: selectedAppointment.patient_id,
      doctor_id: selectedAppointment.doctor_id,
      doctor_name: selectedAppointment.doctor_name,
      reservation_date: newDate || selectedAppointment.reservation_date,
      reservation_time: newTime || selectedAppointment.reservation_time,
      report: newReport || selectedAppointment.report,
    };

    let response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

    if (response.status === 200) {
      alert('Updated successfully');
      fetchAppointments();
      setShowModal(false);
    } else {
      alert('Failed to update. Please try again.');
    }
  };

  const openModal = (appointment) => {
    setSelectedAppointment(appointment);
    setNewDate(appointment.reservation_date);
    setNewTime(appointment.reservation_time);
    setNewReport(appointment.report);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };






  

  return (

    <div className='profilepatient'>
      <Header/>
  
      <div className="small-table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr >
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Report</th>
          
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointments) => (
            <tr key={appointments.appointment_id}>
              <td>{appointments.doctor_name}</td>
              <td>{appointments.reservation_date}</td>
              <td>{appointments.reservation_time}</td>
              <td>{appointments.report}</td>
              
         
              <Button style={{margin:'15px', width:'70px' }} variant="sucsess" onClick={() => openModal(appointments)}>Update</Button>
              <Button variant="danger" onClick={() => handleDeleteAppointment(appointments.appointment_id)}>Delete</Button>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group>
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Time:</Form.Label>
            <Form.Control
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Report:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={newReport}
              onChange={(e) => setNewReport(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdateAppointment}>Update</Button>
        </Modal.Footer>
      </Modal>



      <Footer/>
    </div>
  );

            }
export default PatientProfile;
