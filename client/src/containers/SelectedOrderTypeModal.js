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

const SelectedOrderTypeModal = (props) => {
  const [orderType, setOrderType] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/ordertypes/${props.order_code}`).then((res) => {
      setOrderType(res.data);
    });
  }, []);

  let orderCode = null;
  let orderName = null;
  let specimenType = null;
  orderType.map((data) => (
    orderCode = data.order_code,
    orderName = data.order_name,
    specimenType = data.specimen_type
  ))

  console.log(orderType);
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Link onClick={toggle}>{props.order_code}</Link>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Order Information</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="orderCode">Order Code</Label>
              <Input
                type="number"
                name="orderCode"
                id="orderCode"
                placeholder={orderCode}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="orderName">Order Name</Label>
              <Input
                type="text"
                name="orderName"
                id="orderName"
                placeholder={orderName}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="specimenType">Specimen Type</Label>
              <Input
                type="text"
                name="specimenType"
                id="specimenType"
                placeholder={specimenType}
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

export default SelectedOrderTypeModal;