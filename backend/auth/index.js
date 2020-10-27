const passport = require('passport');

// Serialization functions for PassportJS
require('./serialization');

// Initialize PassportJS Strategies
require('./google');

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

module.exports = { googleAuth, googleCallback };
