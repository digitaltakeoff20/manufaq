module.exports = (app) => {
    const notes = require('../controllers/vendors.controller.js');

    // Create a new Note
    app.post('/vendors', notes.create);

    // Retrieve all Notes
    app.get('/vendors', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/vendors/:vendorId', notes.findOne);

    // Update a Note with noteId
    app.put('/vendors/:vendorId', notes.update);

    // Delete a Note with noteId
    app.delete('/vendors/:vendorId', notes.delete);
}