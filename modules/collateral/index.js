const express = require('express');
const controller = require('./collateral-controller');

const router = express.Router();

router.post('/', controller.bookCollateral);
router.get('/', controller.getAllCollateral);
router.get('/:id', controller.getSingleCollateral);


module.exports = router;