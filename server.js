const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express(); //not sure what this means --

var corsOptions = {
    origin: "http://localhost:0001"
}

app.use(cors(corsOptions));

//parse request of content-type, application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true}));

const db = require("./app/models");
db.sequelize.sync();

//simple route
app.get("/", (req, res)=>{
    res.json({Message:'Welcome to Node/PostgreSQL sample CRUD application'})
});

require("./app/routes/tutorial.routes")(app);

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
