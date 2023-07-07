const { MongoClient } = require('mongodb');
const data = require('./Convert File/JSON/sensorData.json');

async function importData() {
    const uri = 'mongodb://localhost:27017/IoT';
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        await client.connect();

        const db = client.db('IoT');
        const collection = db.collection('sensordatas');

        // Check if the database is non-empty
        const count = await collection.countDocuments();
        if (count > 0) {
            // Check if any documents have the same 'sensorIds' as the new data
            const existingDocuments = await collection.find({ sensorId: { $in: data.map(d => d.sensorId) } }).toArray();
            if (existingDocuments.length > 0) {
                console.log('Error: Database already contains data with the same sensorIds.');
                return;
            }
        }

        // Import data if the database is empty or no documents have the same 'sensorIds'
        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents inserted.`);
    } catch (err) {
        console.log('Error:', err);
    } finally {
        client.close();
    }
}

importData();
