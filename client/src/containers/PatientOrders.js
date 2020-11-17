import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Table } from "reactstrap";

import AddPatientOrderModal from '../containers/AddPatientOrderModal';
import PatientOrder from '../components/PatientOrder';

const PatientOrders = () => {
  const [patientOrders, setPatientOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/patientorders").then((res) => {
      setPatientOrders(res.data);
    });
  }, []);

  const deletePatientOrderHandler = (patient_order_id) => {
    axios.delete(`http://localhost:5000/api/patientorders/${patient_order_id}`);
    let newState = [...patientOrders];
    newState = patientOrders.filter((data) => data.patient_order_id !== patient_order_id);
    setPatientOrders(newState);
  };

  const updatePatientOrder = (updatedPatientOrder) => {
    let newState = [...patientOrders]
    newState = patientOrder.map(data => data.mrn === updatedPatientOrder.patient_order_id ? {...data, ...updatedPatientOrder} : data); 
    setPatientOrders(newState);
   }

  let patientOrder = null;
  if (patientOrders !== null) {
    patientOrder = patientOrders.map((data, index) => {
      return (
        <PatientOrder
          key={index}
          patient_order_id={data.patient_order_id}
          creation_date={data.creation_date}
          patient_id={data.patient_id}
          order_code={data.order_code}
          status={data.status}
          deletePatientOrderHandler={deletePatientOrderHandler}
          updatePatientOrder={updatePatientOrder}
        ></PatientOrder>
      );
    });
  }

  return(
    <div className="PatientOrders">
      <h1>Patient Orders</h1>
      <br />
      <AddPatientOrderModal />
      <br />
      <Table bordered>
      
        {patientOrder}
      </Table>
    </div>
  )
}

export default PatientOrders;