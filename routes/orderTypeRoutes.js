const express = require('express');

const orderTypeControllers = require('../controllers/orderTypeControllers');

const router = express.Router();

router.get('/', orderTypeControllers.getAllOrderTypes);

router.post('/', orderTypeControllers.searchByInformation);


module.exports = router;