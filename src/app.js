// src/app.js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, KTB World!!!');
});

app.get('/ping', (req, res) => {
  res.status(200).send('ping');
});

module.exports = app;

