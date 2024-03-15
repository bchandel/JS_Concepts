"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const appRoutes = require('./routes/appRoutes');
const genericErrorHandler = require("./errors/error.handler");
const tracer = require("cls-rtracer");

const app = express();

app.use(
  tracer.expressMiddleware({
    useHeader: true,
    headerName: "X-trace-id",
  })
);


app.use( bodyParser.json());

app.use("/api/v1", appRoutes);
// app.use("/api/v2", appRoutes);
app.use(genericErrorHandler);

app.get("*", (req, res) => {
  // res.contentType("text/html");
  // res.send();
});

module.exports = app;
