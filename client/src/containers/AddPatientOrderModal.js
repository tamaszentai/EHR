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


  const submitFormHandler = (e) => {
    e.preventDefault();

    const newPatientOrder = {
      // patientOrderId: patientOrderId,
      // creationDate: creationDate,
      patientId: patientId,
      orderCode: orderCode,
    };

    // axios
    //   .post("http://localhost:5000/api/patientorders", newPatient)
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    // props.addNewPatient(newPatient);
    toggle();

    console.log(newPatientOrder)
  };

  let patientSelect;
  if (patients !== []){
    patientSelect = patients.map((data) => {
    return <option value={data.mrn} onClick={patientIdChangeHandler}>{data.mrn}{" --- "}{data.first_name}{" "}{data.last_name}</option>
    })
  }

  let orderTypeSelect;
  if (orderTypes !== []){
    orderTypeSelect = orderTypes.map((data) => {
    return <option value={data.order_code} onClick={orderCodeChangeHandler}>{data.order_code}{" --- "}{data.order_name}</option>
    })
  }



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
              <Label for="mrn">Patient</Label>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                {patientSelect}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="firstName">Order Type</Label>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                {orderTypeSelect}
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="success" onClick={submitFormHandler}>
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
