# IoT Sensor Data Analytics Platform

This project is an IoT sensor data analytics platform that collects data from IoT sensors, stores it in MongoDB, performs real-time analysis, and presents meaningful insights through interactive visualizations.

## Features

- Collects data from IoT sensors.
- Stores sensor data in MongoDB.
- Performs real-time data analysis using C algorithms.
- Presents interactive visualizations of the sensor data.
- Supports conversion of CSV files to JSON format.

## Technologies Used

- C for low-level device communication
- MongoDB for storing sensor data
- Node.js for data processing and visualization
- Express.js for creating an HTTP server
- Chart.js for interactive data visualization

## Prerequisites

Before running this project, make sure to include the `csv_to_json.js` script in project, which handles the conversion of the CSV file to JSON format and ensure that have the following dependencies installed :

- MongoDB
- Node.js

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install the required Node.js dependencies:

   ```bash
   cd <project-folder>
   npm install
   ```

3. Start the MongoDB server:

   ```bash
   mongod
   ```

5. Start the Node.js server:

   ```bash
   node server.js
   ```

6. Open your web browser and visit `http://localhost:3000/server-chart` to access the IoT sensor data analytics platform.

## Result

![IoT Sensor Data Analytics](<IoT Sensor Data Analytics.png>)

## Usage

- The sensor data will be displayed in a table on the left side of the web page.
- Real-time data analysis is performed using C algorithms.
- The analyzed data is presented through interactive visualizations using Chart.js.
- Use the web interface to explore and visualize the sensor data.

## License

This project is licensed under the [MIT License](LICENSE).
