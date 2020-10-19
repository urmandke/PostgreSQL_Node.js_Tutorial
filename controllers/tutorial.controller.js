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
    const title = req.query.title;
    var condition = title ? { title: {[Op.iLike]: '%${title}%'}}:null;

    Tutorial.findAll({ where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while creating the Tutorial."
        });
    });
};

//Find a single Tutorial
exports.findOne = (req,res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
    .then(data => {
        res.send(data);
    })
    
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Tutorial with id=" +id
        });
    });
};



//Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Tutorial.update(req.body, {
        where: {id: id}
    })
    .then (num => {
        if(num == 1){
            res.send({
                message: "Tutorial was updated successfully"
            });
        }
        else{
            res.send({
                message: `Cannot update Tutorial with id=${id}. Tutorial was either not found or req.body is empty`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Tutorial with id=" + id
        })
    })
};

//Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    exports.delete = (req, res) => {
        const id = req.params.id;
      
        Tutorial.destroy({
          where: { id: id }
        })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Tutorial was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete Tutorial with id=${id}. Tutorial was not found!`
            });
        }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
    };
};

//Delete all Tutorials from database.
exports.deleteAll = (req,res) => {

};

//Find all published Tutorials
exports.findAllPublished = (req,res) => {

};

