const express = require('express');
const session = require('express-session');
const Sequelize = require('sequelize');
const secure = require('express-force-https');
const chalk = require('chalk');
const db = require('./models');
const { loginUser } = require('./backend/users/loginUser');
require('dotenv').config();

// Create store for session data in Postgres DB
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({
  db: db.sequelize,
  tableName: 'GroupUsSessions',
});

db.sequelize.sync();

const app = express();
app.use(secure);
app.use(express.json());
app.use(
  session({
    secret: process.env.COOKIE_SESSIONS_SECRET,
    store: sessionStore,
    secure: false,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 40 days
    },
  })
);

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
// app.get('/api/disconnect)

////////////////////////////////////
// SECTION API

// app.get('/api/section/:id')
// app.post('/api/section/:id')
// app.put('/api/section/:id')
// app.delete('/api/section/:id')

app.listen(port, () =>
  console.log(
    chalk.yellow.bold('APP > '),
    chalk.yellow(`Spin up app on port ${port}`)
  )
);
