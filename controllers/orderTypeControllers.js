const pool = require("../db");

const getAllOrderTypes = async (req, res, next) => {
  try {
    const results = await pool.query("SELECT * FROM ordertypes");
    console.table(results.rows);
    res.status(200).json(results.rows);
  } catch (err) {
    console.log(err);
  }
};


const searchByOrderCode = async (req, res, next) => {
  try {
    const { orderCode } = req.body;
    const results = await pool.query("SELECT * FROM ordertypes WHERE order_code = $1", [orderCode]);
    res.status(200).json(results.rows);
  } catch (err) {
    console.log(err);
  }
};


const searchByOrderName = async (req, res, next) => {
  try {
    const { orderName } = req.body;
    const results = await pool.query("SELECT * FROM ordertypes WHERE order_name = $1", [orderName]);
    res.status(200).json(results.rows);
  } catch (err) {
    console.log(err);
  }
};


const searchBySpecimenType = async (req, res, next) => {
  try {
    const { specimenType } = req.body;
    const results = await pool.query("SELECT * FROM ordertypes WHERE specimen_type = $1", [specimenType]);
    res.status(200).json(results.rows);
  } catch (err) {
    console.log(err);
  }
};

// const deleteOrderTypeByOrderCode = (req, res, next) => {
//   const orderCode = req.params.code;
//   const orderType = orderTypes.find((ot) => {
//     return ot.orderCode === orderCode;
//   });
//   if(!orderType){
//     return res.status(404).json({message: 'Order Type not found!'})
//   }
//   orderTypes = orderTypes.filter((order) => order.orderCode !== orderCode);
//   res.status(200).json({message: 'Order Type Deleted!'});
// }

exports.getAllOrderTypes = getAllOrderTypes;
exports.searchByOrderCode = searchByOrderCode;
exports.searchByOrderName = searchByOrderName;
exports.searchBySpecimenType = searchBySpecimenType;
// exports.deleteOrderTypeByOrderCode = deleteOrderTypeByOrderCode;
