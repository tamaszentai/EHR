const express = require('express');

const patientController = require('../controllers/patientControllers');

const router = express.Router();

router.get('/', patientController.getAllPatients);


module.exports.router;