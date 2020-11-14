const Patients = [
  {
    MRN: "789456",
    firstName: "Tamas",
    lastName: "Zentai",
    DOB: "28/12/1989",
    Address: "1 Fake street, Faketown",
    patientOrders: [],
  },
  {
    MRN: "123456",
    firstName: "Joe",
    lastName: "Smith",
    DOB: "28/02/1991",
    Address: "9 Cucumber street, Faketown",
    patientOrders: [],
  }
];

const getallPatients = (req, res, next) => {
  res.status(200).json(Patients);
};

const getPatientById = (req, res, next) => {
  const patientId = req.params.id;
  const patient = Patients.find((pat) => {
    return pat.MRN === patientId;
  });
  if (!patient) {
    return res.status(404).json({
      message: "Could not find a patient for the provided id.",
    });
  }
  res.json({ patient });
};

exports.getallPatients = getallPatients;
exports.getPatientById = getPatientById;
