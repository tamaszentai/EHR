const express = require("express");

const patientControllers = require("../controllers/patientControllers");

const router = express.Router();

router.get("/", patientControllers.getallPatients);

router.get("/:id", patientControllers.getPatientById);

module.exports = router;
