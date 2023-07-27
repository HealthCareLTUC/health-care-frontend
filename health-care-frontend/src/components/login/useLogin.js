import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import LoginNav from './LoginNav/LoginNav';
import './Login.css';
import LoginDoctor from './LoginDoctor/LoginDoctor.js';
import { useState } from 'react';
import LoginPatient from './LoginPatient/LoginPatient';
import SignupDoctor from './SignupDoctor/SignupDoctor';
import SignupPatient from './SignupPatient/SignupPatient';
// import Slider from '../slider/slider';
// import { Image } from 'react-bootstrap';
// import pataint from '../assests/pataint.png'
// import doctor from '../assests/doctor.png'
// import PatientPage from '../../PatientPage';






function useIndex() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const [patientData,setPatient]=useState([])
    const [DoctorData,setDoctor]=useState([])



const getPatientData=(value)=>{
    setPatient(value)
    console.log(value);
}
const getDoctorData=(value)=>{
    setDoctor(value)
    console.log(value);
}

    return {patientData,DoctorData,render:(
        <div>
            {/* <PatientPage  patientData={patientData}   /> */}
            <LoginNav />
            <LoginDoctor handleClose={handleClose} handleShow={handleShow} show={show} callback={getDoctorData}/>
            <LoginPatient handleClose={handleClose1} handleShow={handleShow1} show={show1} callback={getPatientData} />
            <SignupDoctor handleClose={handleClose2} handleShow={handleShow2} show={show2} />
            <SignupPatient handleClose={handleClose3} handleShow={handleShow3} show={show3} />
            <Stack direction="horizontal" gap={2} className="col-md-5 mx-auto my-2">
                {/* <div className='mx-2'> */}
                
                    <h1  style={{ fontSize: '45px'}}>Quality treatment and compassionate care </h1>
               
               {/* <Slider   className='slid'/> */}
               
            </Stack >

            <div className='bot'>
            <Stack  direction="horizontal" gap={2} className="docLog">
            <div className='DL'>
                <Button c as="a" className='x' variant="primary" onClick={() => setShow(!show)}>
                {/* <Image className='img' src={doctor} alt="Icon" /> */}
                    Doctor's Login
                </Button>
                </div>
                <div className='PL'>
                <Button as="a" className='x' variant="success" onClick={() => setShow1(!show1)}>
                {/* <Image className='img' src={pataint} alt="Icon" /> */}
                    Patient's Login
                </Button>
                </div>
            </Stack>
            <Stack direction="horizontal" gap={2} className="signDoc">
                <div className='DS'>
                <Button as="a" className='x' variant="primary" onClick={() => setShow2(!show2)}>
                {/* <Image className='img' src={doctor} alt="Icon" /> */}
                    Doctor's Signup
                  
                </Button>
                </div>
                <div className='PS'>
                <Button as="a" className='x' variant="success" onClick={() => setShow3(!show3)}>
                {/* <Image className='img' src={pataint} alt="Icon" /> */}
                    Patient's Signup
                </Button>
                </div>
            </Stack>
        </div>
        </div>
)}}

export default useIndex;
