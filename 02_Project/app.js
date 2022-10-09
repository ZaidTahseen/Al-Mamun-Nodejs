const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const allStudent = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Max",
  },
  {
    id: 3,
    name: "Van",
  },
];

// CRUD

// Get Student
app.get("/students", (req, res) => {
  //res.send(student);
  res.status(200).json(allStudent);
});

// create a student by POST
app.post("/students", (req, res) => {
  const student = req.body;
  student.id = allStudent.length + 1;
  allStudent.push(student);
  res.status(200).json({ message: "Created Student", allStudent });
});

// update Student
app.put("/students", (req, res) => {
  // if id of student not match , give a response like student not exist
  const studentId = req.body.id;
  const newName = req.body.name;

  allStudent.forEach((student) => {
    if (student.id == studentId) {
      student.name = newName;
      return;
    }
  });
  res.status(200).json({ message: "Updated Student", allStudent });
});

// delete Student
// get by id a student

app.use("*", function (req, res) {
  res.send("Incorrect Route");
});

app.listen(3000, function () {
  console.log(`Listening on Port 3000`);
});
