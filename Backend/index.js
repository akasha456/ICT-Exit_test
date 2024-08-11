const express = require("express");
const cors = require("cors");
const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
const model = require('./model');

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await model(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/get/:id", async (req, res) => {
  try {
    const employee = await model.findById(req.params.id);
    if (!employee) {
      return res.status(404).send({ message: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching employee" });
  }
});


app.get("/get", async (req, res) => {
  try {
    const employees = await model.find(); // Fetches all documents
    res.json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching employees" });
  }
});


app.put("/update/:id", async (req, res) => {
  try {
    const result = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send({ message: "Employee updated", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error updating employee" });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    await model.findByIdAndDelete(req.params.id);
    res.send({ message: "Employee deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error deleting employee" });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});