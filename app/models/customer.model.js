const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
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

module.exports = mongoose.model('customers', customerSchema);