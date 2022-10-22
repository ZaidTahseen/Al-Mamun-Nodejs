// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

const { MongoClient } = require('mongodb');

let database;

const db_uri = "mongodb://localhost:27017/al-mamun";

const mongoConnect = (callback) => {
  MongoClient.connect(db_uri)
    .then((client) => {
      database = client.db();
      callback(client , null );
    })
    .catch((err) => {
      callback(null, err);
    });
};

const getDb = function(){
  if (database) return database ;
  throw 'No Database Found '
}

exports.mongoConnect = mongoConnect ;
exports.getDb = getDb ;

