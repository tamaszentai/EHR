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

const getOrderTypeByOrderCode = async (req, res, next) => {
  try {
    const {ordercode}  = req.params
    const results = await pool.query("SELECT * FROM ordertypes WHERE order_code = $1", [ordercode]);
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

const deleteOrderTypeByOrderCode = async (req, res, next) => {
  try {
  const orderCode = req.params.code;
  const results = await pool.query("DELETE FROM ordertypes WHERE order_code = $1", [orderCode])
  res.status(200).json("Order Type deleted!")
  } catch (err) {
    console.log(err);
  }
}

exports.getAllOrderTypes = getAllOrderTypes;
exports.getOrderTypeByOrderCode = getOrderTypeByOrderCode;
exports.searchByOrderCode = searchByOrderCode;
exports.searchByOrderName = searchByOrderName;
exports.searchBySpecimenType = searchBySpecimenType;
exports.deleteOrderTypeByOrderCode = deleteOrderTypeByOrderCode;
