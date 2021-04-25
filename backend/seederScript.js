require("dotenv").config();

const productData = require("./data/product");
const connectDB = require("./config/db");
const Product = require("./models/product");

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany({})
    
    await Product.insertMany(productData)

    console.log('Data import succesfully')

    process.exit()
    
  } catch (error) {
    console.error('Data import failed')
    process.exit()
  }
}

importData()
