require("dotenv").config();
const express = require("express");
// DB
const connectDB = require("./config/db");
// Routes
const productRoutes = require("./routes/productRoutes");
// DB Conection
connectDB();

const app = express();
// Parse JSON data
app.use(express.json());

const morgan = require("morgan");
;

// Middlewares
app.use(morgan("dev"));
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever ready on port ${PORT}`));
