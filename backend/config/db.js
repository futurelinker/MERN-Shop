require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database conected Succesfully");
  } catch (error) {
    console.error('Database connection fails');
    process.exit;
  }
};

module.exports = connectDB;