'use strict';

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messages = require('./src/server/routes/classifieds');

app.use('/', express.static(path.join(__dirname + '/node_modules/')));

app.use('/', express.static(path.join(__dirname + '/src/client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/classifieds',messages);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
