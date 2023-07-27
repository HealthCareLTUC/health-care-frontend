import React,{useEffect, useState} from 'react'
import { Card , Table,Modal,Button, Form, FormControl} from 'react-bootstrap';
//import PatientPage from '../../PatientPage';
function Reserve(props) {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const handleGetDoctorInfo = async () => {
    setIsLoading(true);
    try {
      const url = `https://healthcare-back.onrender.com/searchDocN`; 
      let res = await fetch(url);
      let data = await res.json();
      //setDoctor(data);

     if (data && data.length > 0) {
      setDoctor(data[0]);
    } else {
      setDoctor(null);
    }
    setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  useEffect(()=>{
    handleGetDoctorInfo();
  },[])
  console.log(doctor);
  
  const handleGetAppointments = async (doctorId) => {
    setIsLoading(true);
    try {
      const response = `https://healthcare-back.onrender.com/getAppointment/${doctorId}`;
      let res = await fetch(response);
      let recivedData = await res.json();
      setAppointments(recivedData.data);
    } catch (error) {
      console.error(error);
      
    }
    setIsLoading(false);
  };
  const handleReservation = async () => {
    setIsLoading(true);
    try {
      const url = 'https://healthcare-back.onrender.com/insertappointment';
      const requestBody = {
        doctor_id: doctor.id,
        reservation_date: reservationDate,
        reservation_time: reservationTime,
      };
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      
      handleGetAppointments(doctor.id);
      setReservationDate('');
      setReservationTime('');
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  return (
    <div>
      {isLoading && <div>Loading doctor info...</div>}
      {doctor && (
  <Card style={{ width: '18rem', height: '200px'}}>
    <Card.Body>
      <Card.Title>Name: {doctor.name}</Card.Title>
      <Card.Text>Specialty: {doctor.specialty}</Card.Text>
      <Card.Text>Address: {doctor.address}</Card.Text>
      <Card.Text>Phone: {doctor.phone}</Card.Text>
    </Card.Body>
  </Card>
 
)}

<div>
     {appointments.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Patient ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.appointment_id}>
                <td>{appointment.appointment_id}</td>
                <td>{appointment.patient_id}</td>
                <td>{appointment.reservation_date}</td>
                <td>{appointment.reservation_time}</td>
                <td>{appointment.report}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      </div>
          


       
      
         <div>
     <Form>
      <h3>Make a Reservation</h3>
     <FormControl type="text"  
        placeholder="Reservation Date" value={reservationDate} onChange={(e) => setReservationDate(e.target.value)} />
          <FormControl type="text"  
         placeholder="Reservation Time" value={reservationTime} onChange={(e) => setReservationTime(e.target.value)} />
         <Button variant="primary" type="submit" style={{fontFamily: ('Srisakdi','cursive' ), width:"500px",fontSize:"15px",alignItems:"center",paddingLeft:"40px",backgroundColor:'#1f43e0'}}>
          Reserve
        </Button>
     </Form>
     </div>
       </div>
  );
}

export default Reserve; 