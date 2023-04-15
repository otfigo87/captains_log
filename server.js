require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const connect = require("./config/db");
const Logs = require("./models/Logs");

const app = express();
const port = 3000;

connect();

//*views engine config
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//* Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//*======================== Routes ======================================
//Index route
app.get("/logs", (req, res) => {
  Logs.find()
    .then((logs) => res.render("Index", { logs }))
    .catch((err) => console.error(err));
});

//!Create Route
app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Logs.create(req.body)
    .then((logs) => {
      res.redirect("/logs");
    })
    .catch((error) => console.log(error));
});
//!New form route
app.get("/logs/new", (req, res) => {
  res.render("New");
});
//!update === PUT
app.put("/logs/:id", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Logs.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((log) => res.redirect(`/logs/${req.params.id}`))
    .catch((err) => console.error(err));
});
//!Edit Form
app.get("/logs/:id/edit", (req, res) => {
  Logs.findById(req.params.id)
    .then((log) => res.render("Edit", { log }))
    .catch((err) => res.send({msg : err.message}));
});

//!Show route
app.get("/logs/:id", (req, res) => {
  Logs.findById(req.params.id)
    .then((log) => {
      res.render("Show", { log });
    })
    .catch((err) => console.error(err));
});
//!delete
app.delete("/logs/:id", (req, res) => {
  Logs.findByIdAndDelete(req.params.id)
    .then((log) => res.redirect("/logs"))
    .catch((err) => console.error(err));
});



app.listen(port, (req, res) => {
  console.log("listening on port " + port);
});
