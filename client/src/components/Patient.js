import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';


const Patient = (props) => {
  return (
    <div>
      <Row>
        <Col md={2}>
      <Card>
        <CardBody body={'black'}>
          <CardTitle tag="h5">{props.firstName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.lastName}</CardSubtitle>
          <Button>More Info</Button>
        </CardBody>
      </Card>
      </Col>
      </Row>
    </div>
  );
};

export default Patient;