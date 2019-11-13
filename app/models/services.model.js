const mongoose = require('mongoose');

const servicesSchema = mongoose.Schema({
    _id: Number,
    name: String,
    description: String
})

module.exports = mongoose.model('services', servicesSchema);