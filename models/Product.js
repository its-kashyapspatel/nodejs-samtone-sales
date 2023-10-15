const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  productId: { type: String, unique: true, required: true },
});

module.exports = mongoose.model("Product", productSchema);
