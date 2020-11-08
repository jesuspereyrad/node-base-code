require('dotenv').config();

// SET NEW RELIC NPM IN THE WEBSITE AND PUT THAT INFO in the .env
process.env.NEW_RELIC && process.env.NEW_RELIC_APP_NAME ? require('newrelic') : undefined;

const express = require('express')
const routes = require('./routes')
const externalService = require('./microservices/service');

var bodyParser = require('body-parser')
const app = express();


// server basic configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);


// External Service
app.use('/external/', externalService)


module.exports = app;
