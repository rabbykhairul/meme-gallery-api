const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const routes = require("./router");

const mongoose = require("mongoose");
require("dotenv").config();

// =====
// connect to database
// =====
mongoose.connect(process.env.mongoDBConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Established Mongoose Connection");
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});