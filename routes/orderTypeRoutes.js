const express = require('express');

const orderTypeControllers = require('../controllers/orderTypeControllers');

const router = express.Router();

router.get('/', orderTypeControllers.getAllOrderTypes);

router.post('/', orderTypeControllers.searchByInformation);

router.delete('/:code', orderTypeControllers.deleteOrderTypeByOrderCode);

module.exports = router;