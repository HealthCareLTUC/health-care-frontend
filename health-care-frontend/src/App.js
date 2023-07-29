import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import PatientPage from './components/patient/patientPage';
import PatientProfile from './components/patient/patientProfile';
import Pharmacy from './components/Pharmacy/Pharmacy'; 
import Reserve from './components/Reserve/Reserve';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';
import Doctorprofile from './components/doctor/Doctor';

// import '@fortawesome/fontawesome-free/css/all.min.css';



import useLogin from './components/login/useLogin';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';

function App() {
  const {render,patientData,DoctorData}=useLogin()
  console.log(patientData);
  return (
    <div className="App">

<Routes>

  <Route path='/' element={render}/>
  
  <Route path='/PatientPage' element={<PatientPage patientData={patientData}/> }/>
  <Route path='/PatientProfile' element={<PatientProfile patientData={patientData}/>}/>
  <Route path='/DoctorPage' element={<Doctorprofile DoctorData={DoctorData}/>}/>
  <Route path='/Pharmacy' element={<Pharmacy/>}/>
  
</Routes>





      {/* <PatientProfile/> */}
      {/* <PatientPage/> */}

      {/*<PatientProfile/>*/}

    


    {/* {render} */}




{/* <Routes>

<Route path='/' element={<PatientPage/>}/>

</Routes> */}

    </div>
  );
}

export default App;
