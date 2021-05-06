// api/app.js
const express = require('express');
const passport = require('passport');
require('dotenv').config();

const app = express();

// Parse json encoded in the request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// allow cors from all - no hustle and never safe
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
})
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));

// start server
app.listen(3001, () => console.log("Server listening on http://localhost:3001"))