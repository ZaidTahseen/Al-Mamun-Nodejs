const express = require("express");
const app = express();
const { mongoConnect } = require("./util/databaseConnection");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

const urlRouter = require("./router/urlShortner");

app.use("/api/url-shortner", urlRouter);

mongoConnect(function (connection, err) {
  if (connection) {
    app.listen(3000, () => {
      console.log("Connected to DB and Listening on Port 3000 ");
    });
  } else if (err) {
    console.log("Connection Failed ", err);
  }
});
