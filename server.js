// server.js
const express = require('express');
const app = express();
const SensorData = require('./models/SensorData');
const db = require('./db');

const path = require('path');

// Serve the index.html file
app.get('/sensor-chart', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/sensor-data', async (req, res) => {
    try {
        const data = await SensorData.find().sort('-timestamp').limit(100);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve sensor data' });
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
