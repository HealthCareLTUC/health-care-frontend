import React from 'react';
import CardDoctors from './CardDoctors';

function DoctorList({ patientData, doctor }) {
  const doctorsArray = Array.isArray(doctor) ? doctor : [];

  return (
    <div className="list">
      {doctorsArray.map((obj, i) => (
        <CardDoctors key={i} doctor={obj} patientData={patientData} />
      ))}
    </div>
  );
}

export default DoctorList;