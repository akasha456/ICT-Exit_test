const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://akashanil456:k6G44kNaAUWi@cluster0.pzmy0oh.mongodb.net/employeesdb?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error);
  });
