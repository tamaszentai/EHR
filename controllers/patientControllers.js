const pool = require("../db");

let Patients = [
  {
    MRN: "789456",
    firstName: "Tamas",
    lastName: "Zentai",
    DOB: "28/12/1989",
    address: "1 Fake street, Faketown",
    patientOrders: [],
  },
  {
    MRN: "123456",
    firstName: "Joe",
    lastName: "Smith",
    DOB: "28/02/1991",
    address: "9 Cucumber street, Faketown",
    patientOrders: [],
  },
];

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
    res.status(200).json(results.rows)
  } catch (err) {
    console.log(err);
  }
};

//***** Create a Patient ****//

const createPatient = async (req, res, next) => {
  try{
    const {MRN, firstName, lastName, DOB, address} = req.body;
    const newPatient = await pool.query(
      "INSERT INTO patients (mrn, first_name, last_name, dob, address) VALUES ($1, $2, $3, $4, $5)",
      [MRN, firstName, lastName, DOB, address]
    );
    res.status(200).json({message: "New Patient added!"});
  }catch (err) {
    if(err.code === '23505')
      res.status(404).json({message: "The provided MRN is in use!"});
    }
};

//***** Update a Patient ****//

const updatePatient = (req, res, next) => {
  const { firstName, lastName, DOB, address } = req.body;
  const patientId = req.params.id;
  const patient = Patients.find((pat) => {
    return pat.MRN === patientId;
  });
  const updatedPatient = { ...Patients.find((pat) => pat.MRN === patientId) };
  const patientIndex = Patients.findIndex((pat) => pat.MRN === patientId);
  updatedPatient.firstName = firstName;
  updatedPatient.lastName = lastName;
  updatedPatient.DOB = DOB;
  updatedPatient.address = address;

  Patients[patientIndex] = updatedPatient;
  if (!patient) {
    return res.status(404).json({
      message: "Could not find a patient for the provided MRN.",
    });
  }
  res.status(200).json({ patient: updatedPatient });
};

//***** Deleting from patientOrder *****/

const deletePatientOrder = (id) => {
  for (let i = 0; Patients.length; i++) {
    patientOrders = Patients[i].patientOrders.filter((order) => order !== id);
  }
};

exports.getallPatients = getallPatients;
exports.getPatientById = getPatientById;
exports.createPatient = createPatient;
exports.updatePatient = updatePatient;
exports.Patients = Patients;
exports.deletePatientOrder = deletePatientOrder;
