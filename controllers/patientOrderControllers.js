const patientControllers = require("./patientControllers");
const Patients = patientControllers.Patients;

const patientOrders = [];

const getAllPatientOrder = (req, res, next) => {
  res.status(200).json(patientOrders)
}

const getPatientOrderById = (req, res, next) => {
  const patientOrderId = req.params.id;
  const patientOrder = patientOrders.find((po) => {
    return po.patientOrderId === patientOrderId
  });
  res.status(200).json(patientOrder); 
}

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


const updatePatientOrder = (req, res, next) => {
  const { status } = req.body;
  const patientOrderId = req.params.id;
  const order = patientOrders.find((po) => {
    return po.patientOrderId === patientOrderId;
  });
  const updatedPatientOrder = {...patientOrders.find(po => po.patientOrderId === patientOrderId) };
  const patientOrderIndex = patientOrders.findIndex(po => po.patientOrderId === patientOrderId);
  updatedPatientOrder.status = status;

  patientOrders[patientOrderIndex] = updatedPatientOrder;
  if(!order){
    return res.status(404).json({
      message: "Could not find a Patient Order for the provided id.",
    });
  }
    res.status(200).json(updatedPatientOrder);
}

const deletePatientOrder = (req, res, next) => {
  const patientOrderId = req.params.id;
  const order = patientOrders.find((po) => {
    po.patientOrderId === patientOrderId
  });
  if(!order){
    return res.status(404).json({message: 'Patient Order not found!'})
  }
  patientOrders = patientOrders.filter((order) => order.patientOrderId !== patientOrderId);
  res.status(200).json({message: 'Patient Order Deleted!'});
}

exports.getAllPatientOrder = getAllPatientOrder;
exports.getPatientOrderById = getPatientOrderById;
exports.createPatientOrder = createPatientOrder;
exports.updatePatientOrder = updatePatientOrder;
exports.deletePatientOrder = deletePatientOrder;
