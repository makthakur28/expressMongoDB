// controllers/productController.js
const Product = require('../models/productModel');

const getProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
};

const addProduct = async (req, res) => {
    const { name, price, stock, category } = req.body;

    const product = new Product({
        name,
        price,
        stock,
        category,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
};

const updateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = req.body.name || product.name;
        product.price = req.body.price || product.price;
        product.stock = req.body.stock || product.stock;
        product.category = req.body.category || product.category;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
