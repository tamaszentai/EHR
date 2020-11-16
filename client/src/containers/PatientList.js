import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardDeck } from 'reactstrap';

import AddPatientModal from './AddPatientModal';
import Patient from "../components/Patient";

import './Button.css';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/patients").then((res) => {
      setPatients(res.data);
    });
  }, []);

  const updatePatient = (updatedPatient) => {
    let newState = [...patients]
    newState = patients.map(data => data.mrn === updatedPatient.mrn ? {...data, ...updatedPatient} : data); 
    setPatients(newState);
   }

  let patient = null;
  if (patients !== null) {
    patient = patients.map((data, index) => {
      return (
        
        <Patient
          mrn={data.mrn}
          firstName={data.first_name}
          lastName={data.last_name}
          key={index}
          dob={data.dob}
          address={data.address}
          updatePatient={updatePatient}
        ></Patient>
        
      );
    });
  }

  const addNewPatient = (newPatient) => {
    setPatients([...patients, newPatient])
  };



  return(
  <div className="PatientList">
    <br />
    <AddPatientModal addNewPatient={addNewPatient}/>
    <br />
    <CardDeck>
    {patient}
    </CardDeck>
    
  
    
    </div>)
};

export default PatientList;
