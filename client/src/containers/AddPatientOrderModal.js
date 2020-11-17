import axios from "axios";
import React, { useState, useEffect } from "react";
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

const AddPatientOrderModal = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const [patients, setPatients] = useState([]);
  const [orderTypes, setOrderTypes] = useState([]);
  const [patientId, setPatientId] = useState(null);
  const [orderCode, setOrderCode] = useState(null);
  const [status, setStatus] = useState(null);

  const toggle = () => setModal(!modal);


  useEffect(() => {
    axios.get("http://localhost:5000/api/ordertypes").then((res) => {
      setOrderTypes(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/api/patients").then((res) => {
      setPatients(res.data);
    });
  }, []);


  const patientIdChangeHandler = (e) => {
    setPatientId(e.target.value);
  };

  const orderCodeChangeHandler = (e) => {
    setOrderCode(e.target.value);
  };

  const statusChangeHandler = (e) => {
    setStatus(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const newPatient = {
      // patientOrderId: patientOrderId,
      // creationDate: creationDate,
      patientId: patientId,
      orderCode: orderCode,
      status: status,
    };

    axios.post("http://localhost:5000/api/patientorders", newPatient).then((res) => {
      console.log(res.data);
    });
    props.addNewPatient(newPatient);
    toggle();
  };

  return (
    <div>
      <Button color="success" onClick={toggle}>
        Add New Order
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>New Order form</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="mrn">Medical Record Number</Label>
              <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          </Input>
            </FormGroup>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstname"
                id="firstName"
                required
                onChange={orderCodeChangeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastname"
                id="lastName"
                required
                onChange={statusChangeHandler}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="success" >
            Add
          </Button>{" "}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddPatientOrderModal;
