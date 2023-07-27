import React, { useState, useRef, useEffect } from 'react';
import DoctorList from './doctorList';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import image1  from '../assests/image1.PNG'
import image2  from '../assests/image2.jpg'
import image3 from   '../assests/image3.jpg'
import Form from 'react-bootstrap/Form';
import './patient.css';








function PatientPage(props) {
  const [SearchName, setSearchName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const nameInputRef = useRef(null);
  const specialtyInputRef = useRef(null);
  const [appointments, setAppointments] = useState([]);
  // const [patient, setpatient] = useState([]);


console.log(props.patientData);
  async function fetchAppointments() {
    try {
      const response = await fetch('https://healthcare-back.onrender.com/getAllAppointment');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  }

  // async function fetchpaitents() {
  //   try {
  //     const response = await fetch('https://healthcare-back.onrender.com/getPatient');
  //     const data = await response.json();
  //     setpatient(data);
  //   } catch (error) {
  //     console.error('Error fetching patient:', error);
  //   }


  // }



  async function handleSearchByName() {
    const NameDoctor = nameInputRef.current.value;
    try {
      if (NameDoctor !== '') {
        const response = await fetch(`https://healthcare-back.onrender.com/searchDocN?name=${NameDoctor}`);

        const dataByName = await response.json();
        console.log(dataByName);
        setSearchName(dataByName);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
     

    }
  }


  async function handleSearchBySpecialty() {
    const specialtyDoctor = specialtyInputRef.current.value;
    console.log(specialtyDoctor);
    if (specialtyDoctor !== '') {
   
      try {
        const response = await fetch(`https://healthcare-back.onrender.com/searchDoc/${specialtyDoctor}`);
        const dataBySpecialty = await response.json();
        console.log(dataBySpecialty);
        setSpecialty(dataBySpecialty);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }



  useEffect(() => {
    fetchAppointments();
   
  }, []);


  function CommentHandler(comentDoc, id) {
    console.log(comentDoc);
    specialty.map((element) => {
      console.log(element.id, "element.id")
      if (element.id === id)//this is the Id what I recived from modal
      {
        element.comment = comentDoc.userComment // to edit data in the original object
        console.log(comentDoc);
        return element
      }
      else {
        return element
      }

    }


    )
  }




  
  

  return (


    <div className="container">
 
    
      {/* {patient.map((patient, i) => {
        return (
          <div key={i}>
            {patient.name}
            {patient.age}
          </div>
        );
      })} */}



<div className="containerdesign">
      <div className="left">
        <p>FIND THE DOCTORS <br/>
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
        <Form.Control  size="lg" ref={nameInputRef} type="text" className="form-control" placeholder="Enter doctor's name"  style={{width:'600px' ,margin:"30px",backgroundColor:"#E3F4F4"}} />
        <button className="btn btn-primary mt-2" onClick={handleSearchByName}     style={{backgroundColor:'#1f43e0', width:'100px' ,height:'55px' }} >
          Search
        </button>
      </div>
      <div className="form-group mt-4">
        <label>Search Doctor by Specialty:</label>
        <Form.Control size="lg" ref={specialtyInputRef} type="text" className="form-control" placeholder="Enter doctor's specialty" style={{width:'600px' ,margin:"20px",backgroundColor:"#E3F4F4"}}/>
        <button className="btn btn-primary mt-2" onClick={handleSearchBySpecialty} style={{backgroundColor:'#1f43e0', width:'100px' ,height:'55px' }}>
          Search
        </button>
      </div>
      <div>
        <Table className='table' responsive="sm">
          <thead>
            <tr>
              <th className="thead">#</th>
              <th>DOCTOR</th>
              <th>SPECIALTY</th>
              <th>DATE</th>
              <th>TIME</th>

            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{appointment.doctorName}</td>
                <td>{appointment.specialty}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <DoctorList doctor={SearchName} />
        <DoctorList doctor={specialty} CommentHandler={CommentHandler} />
      </div>
    </div>
  );
};

export default PatientPage;