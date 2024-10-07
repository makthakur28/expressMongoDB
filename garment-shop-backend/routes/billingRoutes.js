// routes/billingRoutes.js
const express = require('express');
const { generateInvoice } = require('../controllers/billingController');
const router = express.Router();

router.post('/', generateInvoice);

module.exports = router;
