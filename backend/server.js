require("dotenv").config();
// Logger
const morgan = require('morgan')

const express = require("express");
// DB
const connectDB = require("./config/db");
// Routes
const productRoutes = require("./routes/productRoutes");
// DB Conection
connectDB();

const app = express();
// Log activity
app.use(morgan("dev"));

// Parse JSON data
app.use(express.json());

// Middlewares
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever ready on port ${PORT}`));
