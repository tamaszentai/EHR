const patientControllers = require("./patientControllers");
const Patients = patientControllers.Patients;

const createPatientOrder = (req, res, next) => {
  const {
    patientOrderId,
    creationDate,
    patientId,
    orderCode,
    status,
  } = req.body;
  const createdPatientOrder = {
    patientOrderId,
    creationDate,
    patientId,
    orderCode,
    status,
  };
  const patient = Patients.find((pat) => {
    return pat.MRN === patientId;
  });
  if (!patient) {
    return res
      .status(404)
      .json({
        message:
          "Couldn't find patient with the provided ID, Patient Order Cancelled",
      });
  }
  patient.patientOrders.push(patientOrderId);
  res.status(200).json({message: "Patient Order Added!"});
};

// console.log(Patients);

exports.createPatientOrder = createPatientOrder;
