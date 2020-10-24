const express = require('express');
const secure = require('express-force-https');
const chalk = require('chalk');
const db = require('./models');
require('dotenv').config();

const app = express();
app.use(secure);
app.use(express.json());

db.sequelize.sync();

const port = process.env.PORT || 4000;

////////////////////////////////////////////////////////////////////////////////
// ROUTES //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//
// Static Files and Client
app.use(express.static(__dirname + '/build'));
app.get('/', (req, res) => res.sendFile(__dirname + '/build/index.html'));

// API

// Get users
// Save section
// Load list of user secitons

app.listen(port, () =>
  console.log(
    chalk.yellow.bold('APP > '),
    chalk.yellow(`Spin up app on port ${port}`)
  )
);
