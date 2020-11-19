const express = require('express');
const data = require('./backend/data');
const auth = require('./backend/auth');

// Initialize app
const app = express();
require('./backend/config')(app);

////////////////////////////////////
// STATIC FILES AND CLIENT ROUTE
app.use(express.static(__dirname + '/build'));
app.get('/', (req, res) => res.sendFile(__dirname + '/build/index.html'));

////////////////////////////////////
// Middleware for confirming someone is logged in
const authorize = (req, res, next) => {
  if (req.isAuthenticated()) next();
  else res.status(401).send('Access denied. Try signing in.');
};

////////////////////////////////////
// ACCOUNT API

// Auth
app.get('/auth/google', auth.googleAuth);
app.get('/auth/google/callback', auth.googleCallback);
app.get('/auth/verify', authorize, auth.verify);
app.get('/auth/logout', authorize, auth.logout);
app.get('/auth/destroy', authorize, auth.destroy);

// Data
app.get('/data', authorize, data.getData);
app.put('/data/check', authorize, data.checkForStaleData);
app.post('/data/section/new', authorize, data.makeNewSection);
app.put('/data/section/:id', authorize, data.saveSectionData);
app.delete('/data/section/:id', authorize, data.deleteSection);
