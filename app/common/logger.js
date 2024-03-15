"use strict";

const tracer = require('cls-rtracer');
const { createLogger, format, transports } = require('winston');
const config = require('./../config.js');

const rTracerFormat = format.printf(({ level, message, timestamp, ...meta }) => {
    const rid = tracer.id()
    if (rid)
        {return `${timestamp} :: ${level} :: [${tracer.id()}] :: ${message} ${ meta ? JSON.stringify(meta) : ""}`;}
    return `${timestamp} :: ${level} :: ${message} ${ meta ? JSON.stringify(meta) : ""}`;

});

const options = {
    level: config.log_level || "debug",
    handleExceptions: true,
    json: true,
    colorize: true
};

const logger = createLogger({
    level: config.log_level || "debug",
    defaultMeta: { service: "todo_app" },
    format: format.combine(
        format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        format.errors({ stack: true }),
        format.colorize(),
        format.splat(),
        format.simple(),
        rTracerFormat
    )
});

logger.add(
    new transports.Console({
        transports: [new transports.Console(options)],
    })
);

module.exports = logger