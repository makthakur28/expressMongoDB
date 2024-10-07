// controllers/billingController.js
const Invoice = require('../models/invoiceModel');

const generateInvoice = async (req, res) => {
    const { products, totalPrice, customerName, email } = req.body;

    const invoice = new Invoice({
        products,
        totalPrice,
        customerName,
        email,
    });

    const createdInvoice = await invoice.save();
    res.status(201).json(createdInvoice);
};

module.exports = { generateInvoice };
