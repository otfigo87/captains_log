const express = require('express')
const router = express.Router()
const Logs = require("../models/Logs")

//!Index routes
router.get('/', (req, res) => {
    res.send("Welcome Page")
})
router.get('/logs', (req, res) => {
    Logs.find()
      .then((logs) => res.render("Index", { logs }))
      .catch((err) => console.error(err));
})
//!Create Route
router.post("/logs", (req, res) => {
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
})
//!New form route
router.get("/logs/new", (req, res) => {
  res.render("New");
});
//!update === PUT
router.put("/logs/:id", (req, res) => {
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
router.get("/logs/:id/edit", (req, res) => {
  Logs.findById(req.params.id)
    .then((log) => res.render("Edit", { log }))
    .catch((err) => res.send({msg : err.message}));
});
//!Show route
router.get("/logs/:id", (req, res) => {
  Logs.findById(req.params.id)
    .then((log) => {
      res.render("Show", { log });
    })
    .catch((err) => console.error(err));
});
//!delete
router.delete("/logs/:id", (req, res) => {
  Logs.findByIdAndDelete(req.params.id)
    .then((log) => res.redirect("/logs"))
    .catch((err) => console.error(err));
});

module.exports = router