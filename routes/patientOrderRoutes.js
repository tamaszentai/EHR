const express = require('express');

const router = express.Router();

router.post('/', patientOrderControllers.createPatientOrder);

module.exports = router;