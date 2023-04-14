require('dotenv').config();
const express = require('express');
const connect = require('./config/db');


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
app.get('/logs', (req, res) => {
    res.send("Welcome Page")
})
app.get('/logs/new', (req, res) => {
    res.render('New')
})
app.post('/logs', (req, res) => {
    if(req.body.shipIsBroken === "on"){
        req.body.shipIsBroken = true
    }else {
        req.body.shipIsBroken = false;
    }
    res.send(req.body)
})




app.listen(port, (req, res) => {
    console.log('listening on port ' + port);
})