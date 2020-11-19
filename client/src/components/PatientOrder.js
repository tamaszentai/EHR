import React, { useState } from "react";
import axios from 'axios';

import SelectedPatientOrderModal from '../containers/SelectedPatientOrderModal';
import SelectedOrderTypeModal from '../containers/SelectedOrderTypeModal';

const PatientOrder = (props) => {
  const [status, setStatus] = useState(props.status);

  const deletePatientOrderHandler = () => {
    props.deletePatientOrderHandler(props.patient_order_id);
  };

  const statusChangeHandler = (e) => {
    setStatus(e.target.value);
  }

const updatePatientOrderHandler = () => {
  const newStatus = {
    patient_order_id: props.patient_order_id,
    status: status
  }

  axios.patch(`http://localhost:5000/api/patientorders/${props.patient_order_id}`, newStatus);
  props.updatePatientOrder(newStatus);

}

  return (
    <div className="PatientOrder">
      <td style={{ width: "5%" }}>
        <strong>Order ID: </strong>
        <br />
        {props.patient_order_id}
      </td>
      <td style={{ width: "10%" }}>
        <strong>Creation Date: </strong> <br />
        {props.creation_date}
      </td>
      <td style={{ width: "5%" }}>
        <strong>Patient ID: </strong>
        <br />
        <SelectedPatientOrderModal patient_id={props.patient_id} />
      </td>
      <td style={{ width: "5%" }}>
        <strong>Order Code: </strong>
        <br />
        <SelectedOrderTypeModal order_code={props.order_code} />
      </td>
      <td style={{ width: "10%" }}>
        <strong>Status: </strong>
        <br />
        {props.status}
      </td>
      <td style={{ width: "5%" }}>
        <select placeholder={props.status} onChange={statusChangeHandler}>
          <option value="" disabled selected hidden>
            Please Choose...
          </option>
          <option value="performed">Performed</option>
          <option value="reviewed">Reviewed</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
        <br />
        <button onClick={updatePatientOrderHandler}>Update Status</button>
      </td>
      <td style={{ width: "1%" }}>
        <br />
        <button onClick={deletePatientOrderHandler}>Delete</button>
      </td>
    </div>
  );
};

export default PatientOrder;
