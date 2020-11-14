const express = require('express');

const orderTypeControllers = require('../controllers/orderTypeControllers');

const router = express.Router();

router.get('/', orderTypeControllers.getAllOrderTypes);

module.exports = router;