const pool = require("../db");


const getAllPatientOrder = async (req, res, next) => {
  try {
    const results = await pool.query("SELECT * FROM patientorders ORDER BY status");
    console.table(results.rows);
    res.status(200).json(results.rows);
  } catch (err) {
    console.log(err);
  }
}

const createPatientOrder = async (req, res, next) => {
  try {
    const {
      patient_id,
      order_code
    } = req.body;
    const newPatientOrder = await pool.query(
      "INSERT INTO patientorders (patient_id, order_code) VALUES ($1, $2)",
      [patient_id, order_code]
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
    const { id } = req.params;
    const deletePatientOrder = await pool.query("DELETE FROM patientorders WHERE patient_order_id = $1", [id]);
    res.status(200).json("Patient Order deleted!");
  } catch (err) {
    console.log(err);
  }
};

exports.getAllPatientOrder = getAllPatientOrder;
exports.createPatientOrder = createPatientOrder;
exports.updatePatientOrder = updatePatientOrder;
exports.deletePatientOrder = deletePatientOrder;
