const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Basic route testing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});