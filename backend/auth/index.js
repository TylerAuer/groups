const passport = require('passport');
// Serialization functions for PassportJS
require('./serialization');

// Configure PassportJS Strategies
require('./google');

const successDestinationUrl = '/#/app';
const failureDestinationUrl = '/#/login';

// Authorizaitons
const googleAuth = (req, res, next) => {
  passport.authenticate('google', { scope: ['profile', 'email'] });
};

// Callbacks
const googleCallback = (req, res, next) => {
  passport.authenticate('google', {
    successRedirect: successDestinationUrl,
    failureRedirect: failureDestinationUrl,
  });
};

module.exports = { googleAuth, googleCallback };
