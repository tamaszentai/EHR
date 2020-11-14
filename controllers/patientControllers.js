const patients = [
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
  res.status(200).json(patients);
};

exports.getallPatients = getallPatients;
