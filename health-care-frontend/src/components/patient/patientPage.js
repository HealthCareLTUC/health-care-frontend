import React, { useState, useRef, useEffect } from 'react';
import DoctorList from './doctorList';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import image1 from '../assests/image1.PNG';
import image2 from '../assests/image2.jpg';
import image3 from '../assests/image3.jpg';
import Form from 'react-bootstrap/Form';
import './patient.css';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/footer';








function PatientPage(props) {
  const [SearchName, setSearchName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const nameInputRef = useRef(null);
  const specialtyInputRef = useRef(null);
  const [appointments, setAppointments] = useState([]);

  
 
  const location = useLocation();
  const patientData = location.state?.patientData;
  
  
  
  console.log("from patient page patient data",patientData);


  async function fetchAppointments() {
    let id = patientData.id;
    try {
      const response = await fetch(`https://healthcare-back.onrender.com/getpatientAppointment/${id}`);
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  }

  

  console.log("test test",appointments);

  function savedata(arr) {
    try {
      let stringArr = JSON.stringify(arr);
      localStorage.setItem('appointments', stringArr);
      console.log('Data saved to local storage successfully.');
    } catch (error) {
      console.error('Error saving data to local storage:', error);
    }
  }
  
  
  
  savedata(appointments)
  console.log(appointments,'neww');

  async function handleSearchByName() {
    const name = nameInputRef.current.value;
    try {
      if (name !== '') {
        const response = await fetch(`https://healthcare-back.onrender.com/searchDocN?name=${name}`);
        const dataByName = await response.json();
        setSearchName(dataByName);

   
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function handleSearchBySpecialty() {
    const specialty = specialtyInputRef.current.value;
    if (specialty !== '') {
      try {
        const response = await fetch(`https://healthcare-back.onrender.com/searchDoc/${specialty}`);
        const dataBySpecialty = await response.json();
        setSpecialty(dataBySpecialty);

      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }

  
  useEffect(() => {
    fetchAppointments();
  }, []);





  
  return (
    <>
      <Header patientData={patientData}/>
      <div className="container">


      <div className="containerdesign">
          <div className="left">
            <p>FIND THE DOCTORS <br />
              "you are in the safe hands" </p>
          </div>
          <div className="right">
            <div className="image-wrapper">
              <Image className='img1' src={image1} alt="Image 1" />
            </div>
            <div className="image-wrapper">
              <Image className='img2' src={image2} alt="Image 2" />
            </div>
            <div className="image-wrapper">
              <Image className='img3' src={image3} alt="Image 3" />
            </div>
          </div>
        </div>

      
        <div className="form-group">
          <label>Search Doctor by Name:</label>
          <Form.Control
            size="lg"
            ref={nameInputRef}
            type="text"
            className="form-control"
            placeholder="Enter doctor's name"
            style={{ width: '600px', margin: '30px', backgroundColor: '#E3F4F4' }}
          />
          <button
            className="btn btn-primary mt-2"
            onClick={handleSearchByName}
            style={{ backgroundColor: '#1f43e0', width: '100px', height: '55px' }}
          >
            Search
          </button>
        </div>
        <div className="form-group mt-4">
          <label>Search Doctor by Specialty:</label>
          <Form.Control
            size="lg"
            ref={specialtyInputRef}
            type="text"
            className="form-control"
            placeholder="Enter doctor's specialty"
            style={{ width: '600px', margin: '20px', backgroundColor: '#E3F4F4' }}
          />
          <button
            className="btn btn-primary mt-2"
            onClick={handleSearchBySpecialty}
            style={{ backgroundColor: '#1f43e0', width: '100px', height: '55px' }}
          >
            Search
          </button>
        </div>
      
        <div className='tableone'>
          <Table className='table' responsive="sm" >
            <thead>
              <tr>
                <th className="thead">#</th>
                <th>Doctor</th>
                <th>DATE</th>
                <th>TIME</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={appointment.appointment_id}>
                  <td>{index + 1}</td>
                  <td>{appointment.doctor_name}</td>
                  <td>{appointment.reservation_date}</td>
                  <td>{appointment.reservation_time}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <DoctorList patientData={patientData} doctor={SearchName} />
          <DoctorList patientData={patientData} doctor={specialty} />
        </div>
      </div>
     
      <Footer/>
    </>
  );
 
};

export default PatientPage;