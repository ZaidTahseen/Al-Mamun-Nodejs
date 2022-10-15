const mongoConnect = require("./util/dbConnection");

mongoConnect((result , err ) => {
  if (result) {
    console.log("Result ", err);
  } else if (err) {
    console.log("Error ", err);
  }
});
