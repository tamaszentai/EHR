import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Label,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";

const SelectedPatientOrderModal = (props) => {
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/patients/${props.patient_id}`).then((res) => {
      setPatient(res.data);
    });
  }, []);

  let mrn = null;
  let firstName = null;
  let lastName = null;
  let dob = null;
  let address = null;
  patient.map((data) => (
    mrn = data.mrn,
    firstName = data.first_name,
    lastName = data.last_name,
    dob = data.dob,
    address = data.address
  ))

  
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Link onClick={toggle}>{props.patient_id}</Link>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Patient Information</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="mrn">Medical Record Number</Label>
              <Input
                type="number"
                name="mrn"
                id="mrn"
                placeholder={mrn}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstname"
                id="firstName"
                placeholder={firstName}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastname"
                id="lastName"
                placeholder={lastName}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="dob">Date Of Birth</Label>
              <Input
                type="text"
                name="dob"
                id="dob"
                placeholder={dob}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder={address}
                disabled
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SelectedPatientOrderModal;