// const express = require("express");
const express = require('express');

const setupMiddleware = require('./setupMiddleware.js');
const unitsController = require('../units/controller.js');
// const helmet = require('helmet');
const server = express();

// middleware
setupMiddleware(server);

// routes
server.use('/api/units', unitsController)

module.exports= server;