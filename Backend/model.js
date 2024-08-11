const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
}, { collection: 'employee' }); // Specify collection name explicitly

const model = mongoose.model('employee', schema);

module.exports = model;
