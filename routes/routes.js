const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
    // Waiting for incomming request on get method
    // to route on localhost:3050/api
    app.get('/api', DriversController.greetings);
};