const express = require("express");
const app = express();
const errorHandler = require("./middleware/error");

app.use(express.json())

//Route Imports
const product = require("./routes/productRoute");

app.use("/api/v1", product);

//Middleware for Errors 
app.use(errorHandler)

module.exports = app