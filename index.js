// Import libraries
const express = require('express');
const cors = require('cors');

// Import DB connection
const DBconnect = require('./config/db');
DBconnect();

//Start Express App
const App = express();
const port = 4000;

// Enable CORS
App.use(cors());
// Enable express.json
App.use(express.json({ extended: true }));

// Import Routes
App.use('/api/setVote', require('./routes/vote'));

App.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});