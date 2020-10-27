// Serialization functions for PassportJS
require('./serialization');

// Configure PassportJS Strategies
require('./google');

// Functions to handle user auth process
const handleNewUser = require('./handleNewUser');
const handleSignIn = require('./handleSignIn');
//const handleSignOut = require('./handleSignOut');
//const handleDisconnect = require('./handleDisconnect');

module.exports = { handleNewUser, handleSignIn };
