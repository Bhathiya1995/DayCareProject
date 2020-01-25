const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const api = require("./server/routes/api.js");

// set up express app
const app = express();

// app.use(cors)


// assign port 
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.set('secretKey', "DayCare");

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use("/api", api);


app.listen(port, () =>{
    console.log('Server is running on port ', port);
})

