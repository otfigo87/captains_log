const express = require('express')
const router = express.Router()
const FoodLogs = require("../models/FoodLogs")

router.get("/foodlogs", (req, res) => {
    res.send("FoodLogs Page")
})

//!Create Route
router.post("/foodlogs", (req, res) => {
  FoodLogs.create(req.body)
    .then((logs) => {
      res.redirect("/foodlogs");
    })
    .catch((error) => console.log(error));
})
//!New form route
router.get("/foodlogs/new", (req, res) => {
  res.render("NewFood");
});
//!update === PUT
router.put("/foodlogs/:id", (req, res) => {
  FoodLogs.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((log) => res.redirect(`/foodlogs/${req.params.id}`))
    .catch((err) => console.error(err));
});
//!Edit Form
router.get("/foodlogs/:id/edit", (req, res) => {
  Logs.findById(req.params.id)
    .then((log) => res.render("Edit", { log }))
    .catch((err) => res.send({msg : err.message}));
});
//!Show route
router.get("/foodlogs/:id", (req, res) => {
  Logs.findById(req.params.id)
    .then((log) => {
      res.render("Show", { log });
    })
    .catch((err) => console.error(err));
});
//!delete
router.delete("/foodlogs/:id", (req, res) => {
  Logs.findByIdAndDelete(req.params.id)
    .then((log) => res.redirect("/foodlogs"))
    .catch((err) => console.error(err));
});

module.exports = router