const Product = require("../models/Product");
const uuid = require("uuid");

const PRODUCT_OPTIONS = [
  "Additive Masterbatch",
  "UV Masterbatch",
  "PET Masterbatch",
  "Colour Masterbatch",
  "Black Masterbatch",
  "PP Fiber Masterbatch",
  "Special Effect Masterbatch",
  "White Masterbatch",
  "Mono Colour Masterbatch",
];

exports.createManyProducts = async (req, res) => {
  try {
    const productsToInsert = PRODUCT_OPTIONS.map((productName) => ({
      name: productName,
      productId: uuid.v4(),
    }));
    const result = await Product.insertMany(productsToInsert);
    res.send(`Inserted All Products Successfully`);
  } catch (error) {
    res.send(error);
  }
};

exports.createProduct = async (req, res) => {
  const { name } = req.body;
  const productId = uuid.v4();
  try {
    const newProduct = new Product({ name, productId });
    await newProduct.save();
    res.send("New Product Added Successfully!");
  } catch (error) {
    res.send(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.send(error);
  }
};
