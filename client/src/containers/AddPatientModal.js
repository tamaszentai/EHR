import Axios from "axios";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Label, Input } from "reactstrap";

const AddPatientModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [mrn, setMrn] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [dob, setDob] = useState(null);
  const [address, setAddress] = useState(null);

  const toggle = () => setModal(!modal);

  const mrnChangeHandler = (e) => {
    setMrn(e.target.value);
  }

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  }

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  }

  const dobChangeHandler = (e) => {
    setDob(e.target.value);
  }

  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  }

  const newPatient = {
    mrn: mrn,
    first_name: firstName,
    last_name: lastName,
    dob: dob,
    address: address
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:5000/api/patients', JSON.stringify(newPatient))
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Add new patient
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>New patient form</ModalHeader>
        <ModalBody>
        <Form onSubmit={submitFormHandler}>
      <FormGroup>
        <Label for="mrn">Medical Record Number</Label>
        <Input type="number" name="mrn" id="mrn" required onChange={mrnChangeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input type="text" name="firstname" id="firstName" required onChange={firstNameChangeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input type="text" name="lastname" id="lastName" required onChange={lastNameChangeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="dob">Date Of Birth</Label>
        <Input type="date" name="dob" id="dob" required onChange={dobChangeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" name="address" id="address" required onChange={addressChangeHandler}/>
      </FormGroup>
      </Form>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary">
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddPatientModal;
