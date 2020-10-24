const express = require('express');
const secure = require('express-force-https');
const chalk = require('chalk');
const db = require('./models');
const { loginUser } = require('./backend/users/loginUser');
require('dotenv').config();

const app = express();
app.use(secure);
app.use(express.json());

db.sequelize.sync();

const port = process.env.PORT || 4000;

////////////////////////////////////
// STATIC FILES AND CLIENT ROUTE
app.use(express.static(__dirname + '/build'));
app.get('/', (req, res) => res.sendFile(__dirname + '/build/index.html'));

////////////////////////////////////
// ACCOUNT API

// Account
app.post('/api/login', loginUser);
// app.get('/api/logout')

////////////////////////////////////
// SECTION API

// app.get('/api/section/:id')
// app.post('/api/section')
// app.put('/api/section')
// app.delete('/api/section')

app.listen(port, () =>
  console.log(
    chalk.yellow.bold('APP > '),
    chalk.yellow(`Spin up app on port ${port}`)
  )
);
