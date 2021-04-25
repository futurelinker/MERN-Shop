const express = require("express");
// Create router
const router = express.Router();

// Import Controllers
const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

// Methods

//@desc GET all products from DB
//@route GET /api/products
//@acces Public
router.get("/", getAllProducts);

//@desc GET a product by id from DB
//@route GET /api/products/:id
//@acces Public
router.get("/:id", getProductById);
// Export router
module.exports = router;
