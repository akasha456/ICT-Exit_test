// model.js
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

const Employee = mongoose.model('Employee', schema);

module.exports = Employee;
