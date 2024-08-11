const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const BlogModel = require("./model"); // Adjust the path as needed

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// Import the database connection
require("./connection"); // This will automatically connect to the database

// POST API to add data
app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error adding employee" });
  }
});

// GET API to retrieve data
app.get("/get", async (req, res) => {
  try {
    const data = await BlogModel.find(); // Fetch all records
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error retrieving data" });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
