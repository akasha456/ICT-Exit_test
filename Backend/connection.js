const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://akashanil456:k!6G44kNa-AUW+i@cluster0.pzmy0oh.mongodb.net/employeesdb?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
