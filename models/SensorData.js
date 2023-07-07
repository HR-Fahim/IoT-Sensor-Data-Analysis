// models/SensorData.js
const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
    sensorId: { type: String, required: true },
    timestamp: { type: Date, required: true },
    value: { type: Number, required: true },
});

const SensorData = mongoose.model('SensorData', sensorDataSchema);

module.exports = SensorData;
