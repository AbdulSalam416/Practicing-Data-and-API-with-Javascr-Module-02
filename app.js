const { response } = require("express");
const express = require("express");

const DataStore = require("nedb");
const app = express();
const url = 3000;

const database = new DataStore("database.db");
database.loadDatabase();

app.use(express.static("public"));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/api", (req, res) => {
  console.log("I got a request!");
  const data = req.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  res.json(data);
});

app.get("/api", (req, res) => {
  database.find({}, (err, data) => {
    if (!err) {
      res.render("all", { data: JSON.stringify(data) });
    } else {
      res.end;
      return;
    }
  });
});

app.listen(url, () => console.log("Listening to port 3000"));
