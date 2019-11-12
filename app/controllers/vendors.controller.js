const Vendors = require('../models/vendors.model.js')

// Create and Save a new Note
exports.create = (req, res) =>{
    if(!req.body.content){
        return res.status(400)send({
            message: "Vendor fields cannot be empty"
        });
    }
    // Create a Note
    const Vendors = new Vendors ({
        title: req.body.title || "Untitled Vendor",
        content: req.body.content
    });
     // Save Note in the database
    Vendors.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};


// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Vendors.find()
        .sort({_id: 1})
        .then(vendors => {
            res.send(vendors);
        }).catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Vendors."
            })
        })
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Vendors.findById(req.params.vendorId)
        .then(vendor => {
            if(!vendor){
                return res.status(404).send({
                    message: "Vendor not found with id "+ req.params.vendorId
                });
            }
            res.send(vendor);
        }).catch(err => {
            if (err.kind === "ObjectId"){
                return res.status(404).send({
                    message: "Vendor not found with id " + req.params.vendorId
                });
            }

            return res.status(500).send({
                message: "Error retrieving vendor with id " + req.params.vendorId
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Vendors content can not be empty"
        });
    }

    // Find note and update it with the request body
    Vendors.findByIdAndUpdate(req.params.VendorsId, {
        title: req.body.title || "Untitled Vendor",
        content: req.body.content
    }, {new: true})
    .then(Vendors => {
        if(!Vendors) {
            return res.status(404).send({
                message: "Vendors not found with id " + req.params.VendorsId
            });
        }
        res.send(Vendors);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Vendors not found with id " + req.params.VendorsId
            });                
        }
        return res.status(500).send({
            message: "Error updating Vendors with id " + req.params.VendorsId
        });
    });

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Vendors.findByIdAndRemove(req.params.VendorsId)
    .then(Vendors => {
        if(!Vendors) {
            return res.status(404).send({
                message: "Vendors not found with id " + req.params.VendorsId
            });
        }
        res.send({message: "Vendors deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Vendors not found with id " + req.params.VendorsId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Vendors with id " + req.params.VendorsId
        });
    });
};