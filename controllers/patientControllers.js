const pool = require("../db");

//***** Get All Patients ****//

const getallPatients = async (req, res, next) => {
  try {
    const results = await pool.query("SELECT * FROM patients");
    console.table(results.rows);
    res.status(200).json(results.rows);
  } catch (err) {
    console.log(err);
  }
};

//***** Get Patient by Id(MRN) ****//

const getPatientById = async (req, res, next) => {
  try {
    const patientId = req.params.id;
    const results = await pool.query("SELECT * FROM patients WHERE mrn = $1", [
      patientId,
    ]);
    if (results.length === 0){
      res.status(200).json({message: "No patient found!"});
    } else {
    res.status(200).json(results.rows);}
  } catch (err) {
    console.log(err);
  }
};

//***** Create a Patient ****//

const createPatient = async (req, res, next) => {
  try {
    const { MRN, firstName, lastName, DOB, address } = req.body;
    const newPatient = await pool.query(
      "INSERT INTO patients (mrn, first_name, last_name, dob, address) VALUES ($1, $2, $3, $4, $5)",
      [MRN, firstName, lastName, DOB, address]
    );
    res.status(200).json({ message: "New Patient added!" });
  } catch (err) {
    if (err.code === "23505")
      res.status(404).json({ message: "The provided MRN is in use!" });
  }
};

//***** Update a Patient ****//

const updatePatient = async (req, res, next) => {
  try {
    const { mrn } = req.params;
    const { firstName, lastName, address } = req.body;
    const updatePatient = await pool.query(
      "UPDATE patients SET (first_name, last_name, address) = ($1, $2, $3) WHERE mrn = $4",
      [firstName, lastName, address, mrn]
    );
    res.status(200).json("Patient was updated!")
  } catch (err) {
    console.log(err);
  }
};


exports.getallPatients = getallPatients;
exports.getPatientById = getPatientById;
exports.createPatient = createPatient;
exports.updatePatient = updatePatient;
