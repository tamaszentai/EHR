const express = require('express');

const orderTypeControllers = require('../controllers/orderTypeControllers');

const router = express.Router();

router.get('/', orderTypeControllers.getAllOrderTypes);

router.get('/:ordercode', orderTypeControllers.getOrderTypeByOrderCode);

router.post('/ordercode', orderTypeControllers.searchByOrderCode);

router.post('/ordername', orderTypeControllers.searchByOrderName);

router.post('/specimentype', orderTypeControllers.searchBySpecimenType);

router.delete('/:code', orderTypeControllers.deleteOrderTypeByOrderCode);

module.exports = router;