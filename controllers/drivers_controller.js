const Driver = require('../models/driver');

module.exports = {
    greeting(req, res) {
        res.send({ hi : 'there' })
    },

    index(req, res, next) {
        const { lng, lat } = req.query;

        Driver.geoNear(
            { type: 'Point', coordinate: [parseFloat(lng), lat]},
            { spherical: true, maxDistance: 200000}

        )

        .then(drivers => res.send(drivers))
        .catch(next);
    },
//---------------------------------------------------------------------------------------------------------
// The GET request /\ , The POST request \/ 
//---------------------------------------------------------------------------------------------------------

    create(req, res, next) {
    const driverProps = req.body;

    Driver.create(driverProps)
      .then(driver => res.send(driver))
      .catch(next);
    },

    edit(req, res, next) {
        const driverId = req.params.id;
        const driverProps = req.body;

        Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
        .then(() => Driver.findById( { _id: driverId }))
        .then(driver => res.send(driver))
        .catch(next);
    },

    delete(req, res, next) {
        const driverId = req.params.id;

        Driver.findByIdAndRemove({ _id: driverId })
        .then(driver => res.status(204).send(driver))  
        .catch(next);
    }
};