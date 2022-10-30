const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();



mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database Connected !! ");
  })
  .catch((error) => {
    console.log("Database Not Connected ", error);
  });

app.listen(process.env.PORT, () => {
  console.log("3000 listening ");
});

const userRouter = require("./router/userRouter");

app.use( express.json()) ;
app.use("/api/user", userRouter);

app.use("*", function (req, res) {
  res.status(400).json({ message: "Incorrect Route" });
});
