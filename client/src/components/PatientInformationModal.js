import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Label, Input, Table } from "reactstrap";

const PatientInformationModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>
        More Information
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
        <Input type="text" name="firstname" id="firstName" placeholder={props.firstName} disabled/>
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input type="text" name="lastname" id="lastName" placeholder={props.lastName} disabled/>
      </FormGroup>
      <FormGroup>
        <Label for="dob">Date Of Birth</Label>
        <Input type="text" name="dob" id="dob" placeholder={props.dob} disabled/>
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" name="address" id="address" placeholder={props.address} disabled/>
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

export default PatientInformationModal;
