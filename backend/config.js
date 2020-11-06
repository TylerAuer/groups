require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Sequelize = require('sequelize');
const forceHttps = require('express-force-https');
const chalk = require('chalk');
const db = require('../models');

const port = process.env.PORT || 4000;

module.exports = function init(app) {
  // Create store for session data in Postgres DB
  const SequelizeStore = require('connect-session-sequelize')(session.Store);
  const sessionStore = new SequelizeStore({
    db: db.sequelize,
    tableName: 'GroupUsSessions',
  });

  db.sequelize.sync();

  // ADD MIDDLEWARE TO EXPRESS APP
  app.use(forceHttps);
  app.use(express.json());
  app.use(
    session({
      secret: process.env.COOKIE_SESSIONS_SECRET,
      store: sessionStore,
      secure: false,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.listen(port, () =>
    console.log(
      chalk.yellow.bold('APP > '),
      chalk.yellow(`Spin up app on port ${port}`)
    )
  );
};
