const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

//Create and Save a new Tutorial
exports.create = (req,res) => {
    //Validate request
    if(!req.body.title){
        res.status(400).send({message:"Content can not be empty!"});
        return;
    };

    //Create a tutorial object from request body
    const tutorial = {
        title:req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published: false
    };

    //Save Tutorial in the database
    Tutorial.create(tutorial)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while creating the Tutorial."
        });
    });
}
//Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

};

//Find a single Tutorial
exports.findOne = (req,res) => {
    
};

//Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

//Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

//Delete all Tutorials from database.
exports.deleteAll = (req,res) => {

};

//Find all published Tutorials
exports.findAllPublished = (req,res) => {

};

