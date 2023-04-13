const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const reg = require("./auth/reg");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// GET method route
app.get("/", (req, res) => {
  console.log("get method called ");
  res.send("GET request to the homepage");
});
function abc(req, res, next) {
  console.log("middle ware called");
  next();
}
app.get("/reg/:email", abc, (req, res, next) => {
  const fname = req.query.fname;
  const lname = req.query.lname;
  const email = req.params.email;

  res.send(`hello ${fname} ${lname} ${email}`);
});

// POST method route
app.post("/", (req, res) => {
  console.log("post method called ");
  res.send("POST request to the homepage ");
});

app.use("/auth", reg);

//localhost:3001/auth/register

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
