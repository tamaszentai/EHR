import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";

import img from "../assets/patient.png";
import PatientInformationModal from "./PatientInformationModal";
import EditPatientModal from "../containers/EditPatientModal";

const Patient = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody body={"black"}>
          <CardTitle tag="h5">{props.firstName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.lastName}
          </CardSubtitle>
          <PatientInformationModal
            mrn={props.mrn}
            firstName={props.firstName}
            lastName={props.lastName}
            dob={props.dob}
            address={props.address}
          />
          <br />
          <EditPatientModal
            mrn={props.mrn}
            firstName={props.firstName}
            lastName={props.lastName}
            dob={props.dob}
            address={props.address}
            updatePatient={props.updatePatient}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default Patient;
