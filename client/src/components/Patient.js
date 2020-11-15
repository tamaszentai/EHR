import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

import img from '../assets/patient.png';


const Patient = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem"}}>
      <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody body={'black'}>
          <CardTitle tag="h5">{props.firstName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.lastName}</CardSubtitle>
          <Button>More Info</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Patient;