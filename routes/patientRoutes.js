const express = require('express');

const patientControllers = require('../controllers/patientControllers');

const router = express.Router();

router.get('/', patientControllers.getallPatients);


module.exports = router;