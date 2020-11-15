const express = require('express');

const patientOrderControllers = require('../controllers/patientOrderControllers');

const router = express.Router();

router.post('/', patientOrderControllers.createPatientOrder);

router.patch('/:id', patientOrderControllers.updatePatientOrder);

router.delete('/:id', patientOrderControllers.deletePatientOrder);

module.exports = router;