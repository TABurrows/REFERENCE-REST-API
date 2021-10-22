// app/index.js
const express = require("express");
const app = express();

const { API } = require("./config");
const { APIRoutes } = require("./routes");

// Handle post/put json data
app.use(express.json());

// Use API routes
app.use(`/api/${API.Version}`, APIRoutes);

// Status endpoint - Prometheus etc
app.get("/status", (req, res) => {
  res.status(200).send({ status: 200, message: "Status OK" });
});

// Catch all error route
app.get(`/*`, (req, res) => {
  res.status(404).send({ status: 404, message: "Not found" });
});

module.exports = app;
