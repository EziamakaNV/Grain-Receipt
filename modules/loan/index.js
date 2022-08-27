const express = require('express');
const controller = require('./loan-controller');

const router = express.Router();

router.post('/', controller.bookLoan);
router.post('/:id/confirm', controller.confirmLoan);
router.get('/:id', controller.getSingleLoan);


module.exports = router;