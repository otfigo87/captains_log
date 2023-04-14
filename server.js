require('dotenv').config();
const express = require('express');
const connect = require('./config/db');
const Logs = require('./models/Logs');


const app = express();
const port = 3000;

connect()

//*views engine config
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//* Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* Routes
//Index route
app.get('/logs', (req, res) => {
    Logs.find().then((logs) => res.render("Index", { logs }))
    .catch(err => console.error(err));
    
})
app.get('/logs/new', (req, res) => {
    res.render('New')
})
//Create Route
app.post('/logs', (req, res) => {
    if(req.body.shipIsBroken === "on"){
        req.body.shipIsBroken = true
    }else {
        req.body.shipIsBroken = false;
    }
    Logs.create(req.body)
    .then(logs =>{
        // console.log(logs)
        res.redirect('/logs')
    })
    .catch(error => console.log(error))
})




app.listen(port, (req, res) => {
    console.log('listening on port ' + port);
})