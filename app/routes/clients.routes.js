module.exports = (app) => {
    const clients = require('../controllers/clients.controller.js');

    // Create a new client
    app.post('/clients', clients.create);

    // Retrieve all clients
    app.get('/clients', clients.findAll);

    // Retrieve a single client with clientId
    app.get('/clients/:clientId', clients.findOne);

    // Update a client with clientId
    app.put('/clients/:clientId', clients.update);

    // Delete a client with clientId
    app.delete('/clients/:clientId', clients.delete);
}