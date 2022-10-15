const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

const db_uri = "mongodb://localhost:27016";

const mongoConnect = (callback) => {
  MongoClient.connect(db_uri)
    .then((client) => {
      console.log("Mongodb Connected !!! ");
      database = client.db();
      callback(client , null );
    })
    .catch((err) => {
      console.log("Mongodb Not Connected !!! ");
      callback(null, err);
    });
};

module.exports = mongoConnect;
