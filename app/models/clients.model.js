const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    _id: Number,
    companyName: String,
    contactPerson: String,
    email: String,
    address:{
        street: String,
        city: String,
        region: String,
        state: String,
        pinCode: String
    },
    file: String,
    constructionMaterial: [],
    quantity: Number,
    description: String
})

module.exports = mongoose.model('clients', clientSchema);