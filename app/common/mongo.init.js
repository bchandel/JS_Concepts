/* istanbul ignore file */
"use strict";

const _ = require("lodash");
const mongoose = require('mongoose');
const config = require('../config')
const logger = require('./logger')

const options = {
    appName: "todo_app",
    readPreference: "secondaryPreferred",
    keepAlive: true,
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: !["development"].includes(config.env) // true for production
};

const mConnections = {};

_.forEach(config.mongo, (m, key) => {
    const { uri } = m;
    mConnections[key] = createConnection(key, uri);
});

/**
 * Connect to MongoDB
 *
 * @param {string} name
 * @param {string} uri
 * @returns {mongoose.Connection}
 */
function createConnection(name, uri) {
    logger.info("mongodb connection time");
    const db = mongoose.connect(uri, options);
    logger.info(`MongoDB URI ${uri}`)

    db.then(() => {
        logger.info(`MongoDB ${name} connected`);
    }).catch((err) => {
        if (err) {throw err;}
        logger.error("Connected to MongoDB!!!")
    });

    return db;
}

module.exports = mConnections;
