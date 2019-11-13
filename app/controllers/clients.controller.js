const Clients = require('../models/clients.model.js')

exports.create = (req, res) => {
    if(!req.body.companyName){
        return res.status(400).send({
            message: "Vendor fields cannot be empty"
        });
    }

    const client = new Clients({
        _id: req.body.id,
        companyName: req.body.companyName,
        contactPerson: req.body.contactPerson,
        email: req.body.email,
        address: req.body.address,
        file: req.body.file,
        constructionMaterial: req.body.constructionMaterial,
        quantity: req.body.quantity,
        description: req.body.description
    })

    client.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the client"
            })
        })
};

exports.findAll = (req, res) => {
    Clients.find()
        .sort({_id : 1})
        .then(clients => {
            res.send(clients);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the client details."
            })
        })
};

exports.findOne = (req, res) => {
    Clients.findById(req.params.vendorId)
        .then(client => {
            if(!client){
                return res.status(404).send({
                    message: "Client not found with id " + req.params.clientId
                });
            }
            res.send(vendor);
        }).catch(err => {
            if(err.kind === "ObjectId"){
                return res.status(404).send({
                    message: "Client not found with id " + req.params.clientId
                });
            }

            return res.status(500).send({
                message: "Error retrieving client with id " + req.params.clientId
            });
        });
};

exports.update = (req, res) => {

    if(!req.body.id){
        return res.status(400).send({
            message: "Clients content cannot be empty"
        });
    }

    Clients.findByIdAndUpdate(req.params.clientId, {
        _id: req.body.id,
        companyName: req.body.companyName,
        contactPerson: req.body.contactPerson,
        email: req.body.email,
        address: req.body.address,
        file: req.body.file,
        constructionMaterial: req.body.constructionMaterial,
        quantity: req.body.quantity,
        description: req.body.description
    }, {new: true})
    .then(Clients => {
        if(!Clients) {
            return res.status(404).send({
                message: "Clients not found with id " + req.params.clientId
            })
        }
        res.send(Clients);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Clients not found with id " + req.params.clientId
            });
        }
        return res.status(500).send({
            message: "Error updating clients with id " + req.params.clientId 
        });
    });
};

exports.delete = (req, res) => {
    Clients.findByIdAndRemove(req.params.clientId)
    .then(Clients => {
        if(!Clients) {
            return res.status(404).send({
                message: "Clients not found with id " + req.params.clientId
            });
        }
        res.send({message: "Clients deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Client not found with id " + req.params.clientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Client with id " + req.params.clientId
        });
    });
};