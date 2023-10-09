const Product = require('../models/Product');
const uuid = require('uuid');

exports.createProduct = async (req, res) => {
    const { name } = req.body;
    const productId = uuid.v4();
    try {
        const newProduct = new Product({ name, productId });
        await newProduct.save();
        res.send('New Product Added Successfully!');
    } catch(error) {
        res.send(error);
    }
}

exports.getAll = async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch(error) {
        res.send(error);
    }
}