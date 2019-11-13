const Services = require('../models/services.model.js')

exports.create = (req, res) =>{
    if(!req.body.id){
        return res.status(400).send({
            message: "Service fields cannot be empty"
        });
    }

    const service = new Services({
        _id: req.body.id,
        name: req.body.name,
        description: req.body.description
    })

    service.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the service"
            })
        })
    
};

exports.findAll = (req, res) => {
    Services.find()
        .sort({_id : 1})
        .then(services => {
            res.send(services);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the service details."
            })
        })
};

exports.findOne = (req, res) => {
    Services.findById(req.params.serviceId)
        .then(service => {
            if(!service){
                return res.status(404).send({
                    message: "Service not found with id " + req.params.serviceId
                });
            }
            res.send(service);
        }).catch(err => {
            if(err.kind === "ObjectId"){
                return res.status(404).send({
                    message: "Client not found with id " + req.params.serviceId
                });
            }

            return res.status(500).send({
                message: "Error retrieving client with id " + req.params.serviceId
            });
        });
};

exports.update = (req, res) => {

    if(!req.body.id){
        return res.status(400).send({
            message: "Services content cannot be empty"
        });
    }

    Services.findByIdAndUpdate(req.params.serviceId, {
        _id: req.body.id,
        name: req.body.name,
        description: req.body.description
    }, {new: true})
    .then(Services => {
        if(!Services) {
            return res.status(404).send({
                message: "Services not found with id " + req.params.serviceId
            })
        }
        res.send(Services);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Services not found with id " + req.params.serviceId
            });
        }
        return res.status(500).send({
            message: "Error updating services with id " + req.params.serviceId 
        });
    });
};

exports.delete = (req, res) => {
    Services.findByIdAndRemove(req.params.serviceId)
    .then(Services => {
        if(!Services) {
            return res.status(404).send({
                message: "Services not found with id " + req.params.serviceId
            });
        }
        res.send({message: "Services deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Services not found with id " + req.params.serviceId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Service with id " + req.params.serviceId
        });
    });
};