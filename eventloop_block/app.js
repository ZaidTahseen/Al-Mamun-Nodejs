const express = require("express");
const app = express();

app.get("/", function (req, res) {
  console.log("Node Block");
  res.send("I am Get");
//   while (true) ;
});

app.listen(3000, function () {
  console.log(`Listening on Port 3000`);
});
