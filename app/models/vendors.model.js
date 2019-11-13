const mongoose = require('mongoose');

const vendorSchema = mongoose.Schema({
    _id: Number,
    vendorOrganization: String,
    address:{
        street: String,
        city: String,
        region: String,
        state: String,
        pinCode: String
    },
    contact:{
        pointOfContact: String,
        whatsappNum: String,
        contactNum: String,
        email: String
    },
    services: [],
    gstNumber: String,
    isoCertified: Boolean,
});

module.exports = mongoose.model('vendors', vendorSchema);
