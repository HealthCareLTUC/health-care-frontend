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
// import '@fortawesome/fontawesome-free/css/all.min.css';



import useLogin from './components/login/useLogin';
import NavBar from './components/NavBar/NavBar';

function App() {
  const {render,patientData,DoctorData}=useLogin()
  return (
    <div className="App">

<Routes>

  <Route path='/' element={render}/>
  
  <Route path='/PatientPage' element={<PatientPage/>}/>
  
</Routes>





      {/* <PatientProfile/> */}
      {/* <PatientPage/> */}
<<<<<<< HEAD
      {/*<PatientProfile/>*/}
  <Header/>
    
=======

    {/* {render} */}

>>>>>>> main
  <Footer/>

{/* <Routes>

<Route path='/' element={<PatientPage/>}/>

</Routes> */}

    </div>
  );
}

export default App;
