module.exports = (app) => {
    const services = require('../controllers/services.controller.js');

    // Create a new service
    app.post('/services', services.create);

    // Retrieve all services
    app.get('/services', services.findAll);

    // Retrieve a single service with serviceId
    app.get('/services/:serviceId', services.findOne);

    // Update a service with serviceId
    app.put('/services/:serviceId', services.update);

    // Delete a service with serviceId
    app.delete('/services/:serviceId', services.delete);
}