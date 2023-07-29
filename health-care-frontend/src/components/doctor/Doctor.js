import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Footer/footer';
// import NavBar from '../NavBar/NavBar';
import DoctorNavBAr from '../DoctorNav/DoctorNav';
import { useLocation } from 'react-router-dom';



function Doctorprofile() {
  const [appointments, setAppointments] = useState([]);
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

      

  return (

    <div className='profilepatient'>
   <DoctorNavBAr/>

<p>{appointments.doctor_name}</p>

      {/* <h1>Docctor Profile</h1> */}
      <div  className='small-table-wrapper'>
      <Table striped bordered hover>
        <thead>
          <tr >
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>Report</th>
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
              
         
              <Button variant="danger" onClick={() => handleDeleteAppointment(appointments.appointment_id)}>Delete</Button>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      <Footer/>
    </div>
  );

            }
export default Doctorprofile;
