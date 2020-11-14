const Patients = require('./patientControllers');

const createPatientOrder = (res, req, next) => {
  const { patientOrderId, creationDate, patientId, orderCode, status } = req.body;
  const createdPatientOrder = {
    patientOrderId,
    creationDate,
    patientId,
    orderCode,
    status
  }
}

console.log(Patients);

exports.createPatientOrder = createPatientOrder;