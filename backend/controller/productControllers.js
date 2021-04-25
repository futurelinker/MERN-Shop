// Import Models
const Product = require('../models/product')
// Create Controllers
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json(products)
  } catch (error) {
    console.error(error);
    res.staus(500).json({message: "Server Error"})
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
  } catch (error) {
    console.error(error);
    res.staus(500).json({message: "Server Error"})
  }
}
// Export controllers
module.exports = {
  getAllProducts,
  getProductById,
}