module.exports = (app) => {
    const vendors = require('../controllers/vendors.controller.js');

    // Create a new Note
    app.post('/vendors', vendors.create);

    // Retrieve all vendors
    app.get('/vendors', vendors.findAll);

    // Retrieve a single Note with noteId
    app.get('/vendors/:vendorId', vendors.findOne);

    // Update a Note with noteId
    app.put('/vendors/:vendorId', vendors.update);

    // Delete a Note with noteId
    app.delete('/vendors/:vendorId', vendors.delete);
}