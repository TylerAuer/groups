// require('dotenv').config();
require('./backend/auth/google');
require('./backend/auth/serialization');

const express = require('express');
const passport = require('passport');

// Initialize app
const app = express();
require('./backend/config')(app);

// const port = process.env.PORT || 4000;

////////////////////////////////////
// STATIC FILES AND CLIENT ROUTE
app.use(express.static(__dirname + '/build'));
app.get('/', (req, res) => res.sendFile(__dirname + '/build/index.html'));

// Middleware for confirming someone is logged in
const authorize = (req, res, next) => {
  if (req.isAuthenticated()) next();
  else res.redirect('/#/login');
};

////////////////////////////////////
// ACCOUNT API

// Account
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/#/login',
    successRedirect: '/#/app',
  })
);

app.get('/data/user', authorize, require('./backend/getUserInfo'));

// app.get('/auth/google/logout')
// app.get('/auth/google/disconnect)

////////////////////////////////////
// SECTION API

// app.get('/api/section/:id')
// app.post('/api/section/:id')
// app.put('/api/section/:id')
// app.delete('/api/section/:id')
