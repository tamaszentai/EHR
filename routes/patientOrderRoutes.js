const express = require('express');

const patientOrderControllers = require('../controllers/patientOrderControllers');

const router = express.Router();

router.post('/', patientOrderControllers.createPatientOrder);

module.exports = router;