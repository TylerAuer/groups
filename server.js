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

////////////////////////////////////
// ACCOUNT API

// Account
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/user',
  })
);

// app.get('/auth/google/logout')
// app.get('/auth/google/disconnect)

////////////////////////////////////
// SECTION API

// app.get('/api/section/:id')
// app.post('/api/section/:id')
// app.put('/api/section/:id')
// app.delete('/api/section/:id')
