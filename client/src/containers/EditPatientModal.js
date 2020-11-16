import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Label,
  Input,
} from "reactstrap";

const EditPatientModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const mrn = props.mrn;
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [address, setAddress] = useState(props.address);

  const toggle = () => setModal(!modal);

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };

  const editFormHandler = (e) => {
    const updatedPatient = {
      first_name: firstName,
      last_name: lastName,
      address: address,
    };

    const updatedPatientWithMrn = {
      mrn: mrn,
      first_name: firstName,
      last_name: lastName,
      address: address,
    };
    

    axios.patch(`http://localhost:5000/api/patients/${mrn}`, updatedPatient);
    props.updatePatient(updatedPatientWithMrn);
    toggle();
  };

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
              <Input
                type="number"
                name="mrn"
                id="mrn"
                placeholder={props.mrn}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstname"
                id="firstName"
                value={firstName}
                onChange={firstNameChangeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastname"
                id="lastName"
                value={lastName}
                onChange={lastNameChangeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="dob">Date Of Birth</Label>
              <Input
                type="text"
                name="dob"
                id="dob"
                placeholder={props.dob}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={addressChangeHandler}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="warning" onClick={editFormHandler}>
            Update
          </Button>{" "}
          <Button color="danger" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditPatientModal;
