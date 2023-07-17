const asyncErrorHandler = require('../middlewares/helpers/asyncErrorHandler');
const Transaction = require('../models/transactionModel');

// Save transactions to local DB
exports.saveTransaction = asyncErrorHandler(async (req, res, next) => {
    const { senderAddress, receipientAddress, amount } = req.body;
    const transaction = await Transaction.create({
        senderAddress,
        receipientAddress,
        amount
    });
    res.status(201).json({
        success: true,
        transaction,
    });

});