const { json } = require("body-parser");
const pool = require("../db");

const createPatientOrder = async (req, res, next) => {
  try {
    const {
      patientOrderId,
      creationDate,
      patientId,
      orderCode,
      status,
    } = req.body;
    const newPatientOrder = await pool.query(
      "INSERT INTO patientorders (patient_order_id, creation_date, patient_id, order_code, status) VALUES ($1, $2, $3, $4, $5)",
      [patientOrderId, creationDate, patientId, orderCode, status]
    );
    res.status(200).json("New Patient order added!");
  } catch (err) {
    const duplicationError = "Patient order already exists! Use another ID!";
    if (err.code === "23505") {
      res.json(duplicationError);
    }
    console.log(duplicationError);
  }
};

const updatePatientOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatePatientOrder = await pool.query(
      "UPDATE patientorders SET status = $1 WHERE patient_order_id = $2",
      [status, id]
    );
    res.status(200).json("Patient order was updated!");
  } catch (err) {
    console.log(err);
  }
};

const deletePatientOrder = async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

exports.createPatientOrder = createPatientOrder;
exports.updatePatientOrder = updatePatientOrder;
exports.deletePatientOrder = deletePatientOrder;
