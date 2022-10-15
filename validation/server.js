const express = require("express");
const app = express();

// Import / Require  router files
const user = require("./router/userRouter");

// making body visible
app.use( express.json());

// Use imported/required router files
app.use("/api/user", user);



app.use("*", function (req, res) {
  res.status(400).json({ message: "Request Not Found" });
});

app.listen(3000, function () {
  console.log(`Listening on Port 3000`);
});
