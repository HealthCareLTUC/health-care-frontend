import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
// import NavBar from '../NavBar/NavBar';



function PatientProfile() {
  const [appointments, setAppointments] = useState([]);



console.log(appointments);

  async function fetchAppointments () {
    try {
      const response = await fetch('https://healthcare-back.onrender.com/getAllAppointment'); 
      const recivedData = await response.json();
      setAppointments(recivedData);
    } catch (error) {
      console.error(`Error fetching appointments:, ${error}`);
    }
  };


    async function handleDeleteAppointment(id) {
        console.log(id);
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
   
  

  return (

    <div className='profilepatient'>
      {/* <NavBar/> */}
      <h1>Patient Profile</h1>
      <Table striped bordered hover>
        <thead>
          <tr >
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Report</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.doctor}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.report}</td>
              
         
              <Button variant="danger" onClick={() => handleDeleteAppointment(appointments.id)}>Delete</Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

            }
export default PatientProfile;
