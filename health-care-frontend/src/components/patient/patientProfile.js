import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Footer/footer';
// import NavBar from '../NavBar/NavBar';
import { useLocation } from 'react-router-dom';



function PatientProfile() {
  const [appointments, setAppointments] = useState([]);
  const location = useLocation();
  const patientData = location.state?.patientData;
  

console.log("from patient profile",patientData);
console.log("from patient profile2",patientData);
// console.log("from patient profile",patientData);

let newapp=getdata();
console.log("local data",newapp);

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

  return (

    <div className='profilepatient'>
      <Header/>
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
          {appointments.map((appointments) => (
            <tr key={appointments.appointment_id}>
              <td>{appointments.doctor_name}</td>
              <td>{appointments.reservation_date}</td>
              <td>{appointments.reservation_time}</td>
              <td>{appointments.report}</td>
              
         
              <Button variant="danger" onClick={() => handleDeleteAppointment(appointments.appointment_id)}>Delete</Button>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer/>
    </div>
  );

            }
export default PatientProfile;
