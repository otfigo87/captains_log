const express = require('express');


const app = express();
const port = 3000;

//* Routes




app.listen(port, (req, res) => {
    console.log('listening on port ' + port);
})