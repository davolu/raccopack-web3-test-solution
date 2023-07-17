const mongoose = require('mongoose');
const transactionSchema = mongoose.Schema({
    senderAddress: {
        type: String
    },
    receipientAddress: {
        type: String
    },
    amount: {
        type: mongoose.Decimal128,
        required:true
    },
}, { timestamps: true });
module.exports = mongoose.model('transaction', transactionSchema);