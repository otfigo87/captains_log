const express = require('express');


const app = express();
const port = 3000;

//*views engine config
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//* Routes
app.get('/new', (req, res) => {
    res.render('New')
})




app.listen(port, (req, res) => {
    console.log('listening on port ' + port);
})