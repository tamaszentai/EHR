import React, { useState, useEffect } from "react";
import axios from "axios";

import OrderType from "../components/OrderType";

import { Table } from "reactstrap";

const OrderTypes = () => {
  const [orderTypes, setOrderTypes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/ordertypes").then((res) => {
      setOrderTypes(res.data);
    });
  }, []);

  const deleteOrderTypeHandler = (order_code) => {
    axios.delete(`http://localhost:5000/api/ordertypes/${order_code}`);
    let newState = [...orderTypes];
    newState = orderTypes.filter((data) => data.order_code !== order_code);
    setOrderTypes(newState);
  };

  let orderType = null;
  if (orderTypes !== null) {
    orderType = orderTypes.map((data, index) => {
      return (
        <OrderType
          key={index}
          order_code={data.order_code}
          order_name={data.order_name}
          specimen_type={data.specimen_type}
          deleteOrderTypeHandler={deleteOrderTypeHandler}
        ></OrderType>
      );
    });
  }


  return (
    <div className="OrderTypes">
      <h1>Order Types</h1>
      <br />
      <Table bordered>
      
        {orderType}
      </Table>
    </div>
  );
};

export default OrderTypes;
