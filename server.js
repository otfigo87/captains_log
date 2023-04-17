require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const connect = require("./config/db");
const routes = require("./controllers/logs");

const app = express();
const port = 3000;

connect();

//*views engine config
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//* Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//*======================== Routes ======================================

app.use("/", routes);
app.use("/logs", routes);
app.use("/logs/new", routes);
app.use("/logs/:id", routes);
app.use("/logs/:id/edit", routes);




app.listen(port, (req, res) => {
  console.log("listening on port " + port);
});
