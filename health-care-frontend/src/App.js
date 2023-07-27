import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import PatientPage from './components/patient/patientPage';
import PatientProfile from './components/patient/patientProfile';
import Pharmacy from './components/Pharmacy/Pharmacy'; 
import Reserve from './components/Reserve/Reserve';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">



      {/* <PatientPage/> */}
      {/*<PatientProfile/>*/}
  <Header/>
  <Footer/>

{/* <Routes>

<Route path='/' element={<PatientPage/>}/>

</Routes> */}

    </div>
  );
}

export default App;
