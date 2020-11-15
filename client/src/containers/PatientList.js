import React, { useState, useEffect } from "react";
import axios from "axios";

import Patient from "../components/Patient";

import './Button.css';

const PatientList = () => {
  const [patients, setPatients] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/patients").then((res) => {
      setPatients(res.data);
    });
  }, []);

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
        ></Patient>
      );
    });
  }

  return(
  <div className="PatientList">
    <button>Add new patient</button>
    {patient}
    </div>)
};

export default PatientList;
