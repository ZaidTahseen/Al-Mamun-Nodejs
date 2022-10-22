const { mongoConnect, getDb } = require("./util/dbConnection");

mongoConnect(async function (connection, err) {
  if (connection) {
    console.log("Mongodb Connected !!! ");
    // get the database of connected client
    const db = getDb();

    // 1.a - Create a single record / document
    // const user = {
    //   name: "Kal Max",
    //   age: 25,
    //   email: "kal@gmail.com",
    // };
    // const createdUser = await db.collection("users").insertOne(user);
    // console.log("User is created ", createdUser);


    // 1.b - Insert Many records 
    const users = [
      {
        name: "JOhn Cena ",
        email: "john@gmail ",
        phone: 78787878,
      },
      {
        name: "MahaMir",
        phone: 787878787,
      },
      {
        name: "Kali",
        email: "kali@gmail.com",
      },
    ];

    // const resultUsers = await db.collection('users').insertMany( users ) ;
    // console.log('All users Added ');



    // Read operation 
    // get all the users from database 

    const usersAll = await db.collection('users').find().toArray();
    console.log(usersAll);

    // await db.collection("users").deleteMany()

  } else if (err) {
    console.log("Mongodb Not Connected !!! ", err);
  }
});
