const patientControllers = require("./patientControllers");
const Patients = patientControllers.Patients;

const patientOrders = [];



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
  for(let i = 0; i < patientOrders.length; i++){
    if(patientOrders[i].patientOrderId === patientOrderId){
      return res.status(403).json({message: "Patient order already exists!"})
    }
  }
      patientOrders.push(createdPatientOrder);
      patient.patientOrders.push(patientOrderId);
      res.status(200).json({message: "Patient Order Added!"});
  console.log(patientOrders);
};



exports.createPatientOrder = createPatientOrder;
