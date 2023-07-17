const express = require('express');
const { saveTransaction } = require('../controllers/transactionController');

const router = express.Router();
router.route('/transaction/store').post(saveTransaction);
module.exports = router;