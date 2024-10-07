// models/invoiceModel.js
const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: Number,
    }],
    totalPrice: Number,
    customerName: String,
    email: String,
}, { timestamps: true });

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
