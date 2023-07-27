import React from 'react';
import CardDoctors from './CardDoctors';

function DoctorList(props) {
    const restartArr=[];
  const doctorsArray = Array.isArray(props.doctor) ? props.doctor : [];

  return (
    <div className="list">
      {doctorsArray.map((obj, i) => (
      
        props.doctor ?(
          <CardDoctors key={i} doctor={obj} />
        ) : (
          <CardDoctors key={i} doctorname={obj} />
        )
      ))}
      

    </div>
  );
  doctorsArray=restartArr;
  console.log();
}

export default DoctorList;




