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
        landLine: {
            areaCode: String,
            number: String,
        },
        mobile: String,
        whatsapp: String,
        email: String
    },
    isoCertified: String,
    services: [],
    gstNumber: String,
    
});

module.exports = mongoose.model('vendors', vendorSchema);
