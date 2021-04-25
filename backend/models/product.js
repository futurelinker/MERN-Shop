const moongose = require('mongoose')
// Define Product Schema
const productSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})
// Create Product Schemma
const Product = moongose.model("product", productSchema);

module.exports = Product;