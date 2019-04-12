const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

const db = {
    events: [],
    reminders: [],
    users: {}

};

app.use(cors()); // Allow CORS on all routes
require('./app/routes')(app, db);
app.listen(port, () => {
    console.log('We are live on port :' + port);
});