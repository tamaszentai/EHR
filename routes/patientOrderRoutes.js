const express = require('express');

const patientOrderControllers = require('../controllers/patientOrderControllers');

const router = express.Router();

router.get('/:id', patientOrderControllers.getPatientOrderById);

router.post('/', patientOrderControllers.createPatientOrder);

router.patch('/:id', patientOrderControllers.updatePatientOrder);

module.exports = router;