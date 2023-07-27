import React, { useState } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';
import "./Pharmacy.css"
function Pharmacy() {
  const [drugName, setDrugName] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    window.location.href = `https://www.goodrx.com/${drugName}`;
  };

  return (
    <div >
      <h1>Drug Search</h1>
      <Form className='form1' onSubmit={handleSearch} style={{paddingLeft:"400px",width:"800px",paddingTop:"100px",paddingBottom:"300px"}} >
        <FormControl type="text"  
         placeholder="Enter drug name" 
         className="mr-sm-2" value={drugName} 
         onChange={(event) => setDrugName(event.target.value)} 
         style={{width:"500px",marginBottom:"20px"}}
         />
        <Button variant="primary" type="submit" style={{fontFamily: ('Srisakdi','cursive' ), width:"500px",fontSize:"15px",alignItems:"center",paddingLeft:"40px",backgroundColor:'#1f43e0'}}>
          Search
        </Button>
      </Form>
    </div>
  );
}

export default Pharmacy;