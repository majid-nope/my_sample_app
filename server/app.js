const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("node:fs/promises");
const data = require("./data.json");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// routing
app.get("/", (req, res) => {
  res.send("Hello Iam working");
});

app.get("/getUser", (req, res) => {
  res.json(data);
});

app.post("/addUser", (req, res) => {
  fs.writeFile(__dirname + "/data.json", JSON.stringify(req.body)).then(
    (result) => {
      console.log(result);
      res.end();
    }
  );
});

// listening
app.listen(5000, () => {
  console.log("server started");
});
