import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import PatientPage from './components/patient/patientPage';
import PatientProfile from './components/patient/patientProfile';

function App() {
  return (
    <div className="App">


      {/* <PatientPage/> */}
      <PatientProfile/>
    
{/* <Routes>

<Route path='/' element={<PatientPage/>}/>

</Routes> */}

    </div>
  );
}

export default App;
