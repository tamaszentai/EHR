import React from "react";

// import { Table } from "reactstrap";

const OrderType = (props) => {

  const deleteOrderTypeHandler = () => {
    props.deleteOrderTypeHandler(props.order_code);
  }

  return (
    <div className="OrderType">
          <td style={{width: "5%"}}><strong>Code: </strong>{props.order_code}</td>
          <td style={{width: "50%"}}><strong>Name: </strong> <br />{props.order_name}</td>
          <td style={{width: "5%"}}><strong>Specimen: </strong>{props.specimen_type}</td>
          <td style={{width: "20%"}}><br /><button onClick={deleteOrderTypeHandler}>DELETE</button></td>
    </div>
  );
};

export default OrderType;
