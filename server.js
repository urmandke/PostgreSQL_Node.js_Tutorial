const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express(); //not sure what this means --

var corsOption = {
    origin: "http://localhost:0001"
}

app.use(cors(corsOptions));

//parse request of content-type, application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true}));

