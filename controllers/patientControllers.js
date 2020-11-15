const {Client} = require('pg');
const client = new Client({
  user: "postgres",
  password: "tamaszentai",
  host: "localhost",
  port: 5432,
  database: "EHR"
})


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
  await client.connect()
  const results = await client.query("select * from patients");
  console.table(results.rows);
  res.status(200).json(results.rows);
};

//***** Get Patient by Id(MRN) ****//

const getPatientById = (req, res, next) => {
  const patientId = req.params.id;
  const patient = Patients.find((pat) => {
    return pat.MRN === patientId;
  });
  if (!patient) {
    return res.status(404).json({
      message: "Could not find a patient for the provided MRN.",
    });
  }
  res.json({ patient });
};

//***** Create a Patient ****//

const createPatient = (req, res, next) => {
  const { MRN, firstName, lastName, DOB, address, patientOrders } = req.body;
  const createdPatient = {
    MRN,
    firstName,
    lastName,
    DOB,
    address,
    patientOrders
  };

// MRN duplication prevention 

  for (let i = 0; i < Patients.length; i++) {
    if (Patients[i].MRN === MRN) {
      return res.status(403).json({ message: "Given MRN is in use" });
    }
  }

  Patients.push(createdPatient);
  res.status(201).json({ patient: createdPatient });
};


//***** Update a Patient ****//

const updatePatient = (req, res, next) => {
  const { firstName, lastName, DOB, address } = req.body;
  const patientId = req.params.id;
  const patient = Patients.find((pat) => {
    return pat.MRN === patientId;
  });
  const updatedPatient = {...Patients.find(pat => pat.MRN === patientId) };
  const patientIndex = Patients.findIndex(pat => pat.MRN === patientId);
  updatedPatient.firstName = firstName;
  updatedPatient.lastName = lastName;
  updatedPatient.DOB = DOB;
  updatedPatient.address = address;

  Patients[patientIndex] = updatedPatient;
if(!patient){
  return res.status(404).json({
    message: "Could not find a patient for the provided MRN.",
  });
}
  res.status(200).json({patient: updatedPatient});
}

//***** Deleting from patientOrder *****/

const deletePatientOrder = (id) => {
  for(let i = 0; Patients.length; i++){
    patientOrders = Patients[i].patientOrders.filter((order) => order !== id);
  }
}

exports.getallPatients = getallPatients;
exports.getPatientById = getPatientById;
exports.createPatient = createPatient;
exports.updatePatient = updatePatient;
exports.Patients = Patients;
exports.deletePatientOrder = deletePatientOrder;
