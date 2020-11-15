import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Label, Input } from "reactstrap";

const EditPatientModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  const toggle = () => setModal(!modal);


  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  }

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  }

 const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  }

  return (
    <div>
      <Button color="secondary" onClick={toggle}>
       Update Information
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Patient Information</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="mrn">Medical Record Number</Label>
        <Input type="number" name="mrn" id="mrn" placeholder={props.mrn} disabled/>
      </FormGroup>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input type="text" name="firstname" id="firstName" placeholder={props.firstName} onChange={firstNameChangeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input type="text" name="lastname" id="lastName" placeholder={props.lastName} onChange={lastNameChangeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="dob">Date Of Birth</Label>
        <Input type="text" name="dob" id="dob" placeholder={props.dob} disabled/>
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" name="address" id="address" placeholder={props.address} onChange={addressChangeHandler}/>
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
};

export default EditPatientModal;
