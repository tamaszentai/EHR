import React, {useState, useEffect} from 'react';
import axios from 'axios';

const OrderTypes = () => {
  const [orderTypes, setOrderTypes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/ordertypes").then((res) => {
      setOrderTypes(res.data);
    });
  }, []);


  return (
    <div className="OrderTypes">
      <h1>Order Types</h1>
    </div>
  )
}

export default OrderTypes;