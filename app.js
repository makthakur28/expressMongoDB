// app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./garment-shop-backend/config/db');
const authRoutes = require('./garment-shop-backend/routes/authRoutes');
const productRoutes = require('./garment-shop-backend/routes/productRoutes');
const billingRoutes = require('./garment-shop-backend/routes/billingRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/billing', billingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
