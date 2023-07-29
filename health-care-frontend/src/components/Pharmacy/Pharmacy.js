import React, { useState } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';
import "./Pharmacy.css"
import drugimage from '../assests/medical.png' 
import Header from '../Header/Header';
import Footer from '../Footer/footer';
function Pharmacy() {
  const [drugName, setDrugName] = useState('');
  const handleSearch = (event) => {
    event.preventDefault();
    window.location.href = `https://www.goodrx.com/${drugName}`;
  };
  return (
    <>
    <Header/>
    <div className='form1' style={{ backgroundImage: `url(${drugimage} )`,
    backgroundSize: '600px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    opacity: '0.2'
    }}>
    
    </div> 
    <div style={{  
      position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'}}>
      <h1 style={{fontFamily: ('Courgette','cursive'),color:"#1f43e0",paddingBottom:"60px"}}>Search for a Drug </h1>
      <Form  onSubmit={handleSearch} style={{paddingLeft:"100px",width:"800px",paddingTop:"10px",paddingBottom:"300px"}} >
        <FormControl type="text"  
         placeholder="Enter drug name" 
         className="mr-sm-2" value={drugName} 
         onChange={(event) => setDrugName(event.target.value)} 
         style={{width:"500px",marginBottom:"20px"}}
         />
         <div style={{ position: 'absolute',
  top: '60%'
  }}>
        <Button variant="outline-primary" type="submit" style={{fontFamily:('Srisakdi','cursive'), width:"500px",fontSize:"15px",alignItems:"center"}}>
          Search
        </Button>
       </div>
      </Form>
      </div>
      <Footer/>
    </>
  );
}
export default Pharmacy;