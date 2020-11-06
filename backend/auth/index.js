const passport = require('passport');
const verify = require('./verify');
const logout = require('./logout');
const destroy = require('./destroy');

// Serialization functions for PassportJS
require('./serialization');

// Initialize PassportJS Strategies
require('./google');

// Redirect after auth process
const successUrl = '/#/app';
const failureUrl = '/#/login';

// Authorizaitons
const googleAuth = (req, res, next) => {
  passport.authenticate('google', { scope: ['profile', 'email'] })(
    req,
    res,
    next
  );
};

// Callbacks
const googleCallback = (req, res, next) => {
  passport.authenticate('google', {
    successRedirect: successUrl,
    failureRedirect: failureUrl,
  })(req, res, next);
};

module.exports = { googleAuth, googleCallback, verify, logout, destroy };
