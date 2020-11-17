import React from "react";
import PatientOrders from "../containers/PatientOrders";

const PatientOrder = (props) => {

  const deletePatientOrderHandler = () => {
    props.deletePatientOrderHandler(props.patient_order_id);
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
        {props.patient_id}
      </td>
      <td style={{ width: "5%" }}>
        <strong>Order Code: </strong>
        <br />
        {props.order_code}
      </td>
      <td style={{ width: "10%" }}>
        <strong>Status: </strong>
        <br />
        {props.status}
      </td>
      <td style={{ width: "5%" }}>
        <select placeholder={props.status}>
          <option value="" disabled selected hidden>
            Please Choose...
          </option>
          <option value="requested">Requested</option>
          <option value="performed">Performed</option>
          <option value="reviewed">Reviewed</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
        <br />
        <button>Update Status</button>
      </td>
      <td style={{ width: "1%" }}>
        <br />
        <button onClick={deletePatientOrderHandler}>Delete</button>
      </td>
    </div>
  );
};

export default PatientOrder;
