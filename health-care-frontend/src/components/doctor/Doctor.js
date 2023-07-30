import React, { useState, useEffect } from 'react';
import { Table, Button, Modal ,Form} from 'react-bootstrap';
import Footer from '../Footer/footer';
import DoctorNavBAr from '../DoctorNav/DoctorNav';
import { useLocation } from 'react-router-dom';
import imageprofile from '../assests/imageprofile.jpg'
import './doctor.css'

function Doctorprofile() {
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  const location = useLocation();
  const DoctorData = location.state?.DoctorData;
  

console.log("from patient profile",DoctorData);
console.log("Doctor ID",DoctorData.id);

  async function fetchAppointments () {
    let id =DoctorData.id;
    console.log("pateint  ID to ",id);
    try {
      const response = await fetch(`https://healthcare-back.onrender.com/getAppointment/${id}`); 
      const recivedData = await response.json();
      setAppointments(recivedData);
    } catch (error) {
      console.error(`Error fetching appointments:, ${error}`);
    }
  };

console.log("new app for doctor",appointments);
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

      


      const handleUpdateAppointment = async () => {
        if (!selectedAppointment) {
          alert('No appointment selected.');
          return;
        }
    
        const id = selectedAppointment.appointment_id;
        const url = `https://healthcare-back.onrender.com/updateAppointment/${id}`;
    
        const updatedData = {
          ...selectedAppointment,
          reservation_date: newDate || selectedAppointment.reservation_date,
          reservation_time: newTime || selectedAppointment.reservation_time,
        };
    
        try {
          let response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
          });
    
          if (response.status === 200) {
            alert('Updated successfully');
            fetchAppointments();
            setShowModal(false);
          } else {
            alert('Failed to update. Please try again.');
          }
        } catch (error) {
          console.error('Error updating appointment:', error);
        }
      };
    
    
      const openModal = (appointment) => {
        setSelectedAppointment(appointment);
        setNewDate(appointment.reservation_date);
        setNewTime(appointment.reservation_time);
        setShowModal(true);
      };
    
   
      const closeModal = () => {
        setSelectedAppointment(null);
        setNewDate('');
        setNewTime('');
        setShowModal(false);
      };













  return (

    <div className='profilepatient'>
   <DoctorNavBAr/>

   <div className="doctor-card">
        <img src={imageprofile} alt={DoctorData.doctor_name}  style={{width:'100px'}}/>
        <h2>Name: {DoctorData.doctor_name}</h2>
        <h2>  Specialty:{DoctorData.specialty}</h2>
        <h2>Adress: {DoctorData.location}</h2>


      </div>


{/* <p>{DoctorData.doctor_name}</p> */}


      <div  className='small-table-wrapper'>
      <Table striped bordered hover>
        <thead>
          <tr >
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th style={{width:'300px'}}>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointments) => (
            <tr key={appointments.appointment_id}>
              <td>{appointments.patient_name}</td>
              <td>{appointments.reservation_date}</td>
              <td>{appointments.reservation_time}</td>
              <td>{appointments.report}</td>
              
         
           
           
            <td> <Button style={{margin:'15px', width:'70px' }} variant="secondary"  onClick={() =>  openModal(appointments)}>Update</Button> 
            
            <Button variant="danger" onClick={() => handleDeleteAppointment(appointments.appointment_id)}>Delete</Button> 
            </td>
             

           
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

        </Modal.Body>



 
        
         
        

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateAppointment}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <Footer/>
    </div>
  );

            }
export default Doctorprofile;
