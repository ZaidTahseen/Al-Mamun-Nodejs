const express = require("express");
const app = express();

// Import / Require  router files
const about = require("./router/about");
const info = require('./router/info');

// Import Middleware function 
const basicFunction = require('./middleware/basic')

// Use imported/required router files
app.use(basicFunction);
app.use("/about", about);
app.use("/info", info);


app.use("*", function (req, res) {
  res.status(400).json({ message: "Request Not Found" });
});

app.listen(3000, function () {
  console.log(`Listening on Port 3000`);
});
