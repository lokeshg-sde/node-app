require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const mongoString = process.env.DATABASE_URL;
const portNumber = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.listen(portNumber, () => {
  console.log(`Server Started at ${portNumber}`);
});
