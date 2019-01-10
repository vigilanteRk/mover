const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PontSchemaa = new Schema ({
   type: { type: String, default: 'Point'}         ,
    coordinates : { type: [Number], index: '2dSphere'}
});

const DriverSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    driving: {
        type: Boolean,
        default: false
    },

    // geometry: pointSchema
});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;